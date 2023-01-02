import { store } from "components/AppProvider";
import { filterMinifigs, draw, isOffline } from "functions";

import { Minifigs, RedirectType, ShowError } from "types";

const fetchData = (path: string, redirect: RedirectType) => {
    if (isOffline()) {
        const showErrorPayload: ShowError = {
            isError: true,
            errorMessage: "No Internet available",
        };
        store.dispatch({ type: "ERROR_SHOW", payload: showErrorPayload });

        return;
    }

    let temporaryStorage: Minifigs = [];
    var nextURL: string;
    store.dispatch({ type: "LOADING_START" });

    function happyEnd() {
        const trio = draw(temporaryStorage);
        store.dispatch({ type: "LOADING_COMPLETE" });
        store.dispatch({ type: "DRAW_SET", payload: trio });
        redirect.select();
    }

    function emptyEnd() {
        const showErrorPayload: ShowError = {
            isError: true,
            errorMessage: "Apparently dementors sucked all the figs",
        };
        store.dispatch({ type: "ERROR_SHOW", payload: showErrorPayload });
    }

    function theEnd(storage: Minifigs) {
        store.dispatch({ type: "RESET_TEASERS" });
        if (temporaryStorage.length === 0) {
            emptyEnd();
        } else {
            happyEnd();
        }
    }

    async function recursiveSingleFetch() {
        var fullPath = nextURL || path;
        const fetchResult = await fetch(fullPath).catch(error => {
            const showErrorPayload: ShowError = { isError: true, errorMessage: error.message || "" };
            store.dispatch({ type: "ERROR_SHOW", payload: showErrorPayload });
        });
        if (fetchResult) {
            const resp = await fetchResult.json();
            if (resp && resp.results) {
                const figsHarryPotter = filterMinifigs(resp.results, "Harry Potter");
                if (figsHarryPotter.length) {
                    temporaryStorage = temporaryStorage.concat(figsHarryPotter);
                    figsHarryPotter.forEach(fig => {
                        setTimeout(() => {
                            store.dispatch({ type: "TEASERS_UPDATE", payload: fig });
                        }, 1000);
                    });
                }

                if (resp.next) {
                    nextURL = resp.next;
                    setTimeout(recursiveSingleFetch, 1000);
                    store.dispatch({ type: "COUNTER_UPDATE" });
                } else {
                    theEnd(temporaryStorage);
                }
            } else {
                theEnd(temporaryStorage);
            }
        }
    }
    recursiveSingleFetch();
};

export default fetchData;
