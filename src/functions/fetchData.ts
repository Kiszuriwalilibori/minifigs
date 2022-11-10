import { store } from "Components/AppProvider";
import filterMinifigs from "functions/filterMinifigs";
import draw from "functions/draw";

import { Minifig, RedirectType, ShowError } from "types/types";

const fetchData = (path: string, redirect: RedirectType) => {
    let temporaryStorage: Minifig[] = [];
    var nextURL: string;
    store.dispatch({ type: "LOADING_START" });

    function happyEnd() {
        const trio = draw(temporaryStorage);
        store.dispatch({ type: "LOADING_COMPLETE", payload: trio });
        redirect.select();
    }

    function emptyEnd() {
        const showErrorPayload: ShowError = {
            isError: true,
            errorMessage: "Apparently dementors sucked all the figs",
        };
        store.dispatch({ type: "ERROR_SHOW", payload: showErrorPayload });
    }

    function theEnd(storage: Minifig[]) {
        if (temporaryStorage.length === 0) {
            emptyEnd();
        } else {
            happyEnd();
        }
    }
    //var counter = 0;
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
                    store.dispatch({ type: "TEASERS_UPDATE", payload: figsHarryPotter });
                }

                if (resp.next) {
                    nextURL = resp.next;
                    setTimeout(recursiveSingleFetch, 1000);
                    //counter++;
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
