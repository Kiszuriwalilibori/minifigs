import { store } from "Components/AppProvider";
import filterMinifigs from "js/filterMinifigs";
import draw from "js/draw";

import { Minifig, RedirectType, ShowError } from "types/types";

const fetchData = (path: string, redirect: RedirectType) => {
    let temporaryStorage: Minifig[] = [];
    var nextURL: string;
    store.dispatch({ type: "LOADING_START" });

    function happyEnd() {
        const trio = draw(temporaryStorage);
        store.dispatch({ type: "LOADING_COMPLETE", payload: trio });
        redirect.select();
        console.log(trio, "TRIO");
    }

    function emptyEnd() {
        console.log("empty end");
        const showErrorPayload: ShowError = {
            isError: true,
            errorMessage: "Dementory zassały wszystkie figurki",
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

    async function recursiveSingleFetch() {
        console.log("recursive single fetch");
        var fullPath = nextURL || path;
        const fetchResult = await fetch(fullPath).catch(error => {
            const showErrorPayload: ShowError = { isError: true, errorMessage: error.message || "" };
            store.dispatch({ type: "ERROR_SHOW", payload: showErrorPayload });
            console.log("sending error from recursive");
        });
        if (fetchResult) {
            const resp = await fetchResult.json();
            if (resp && resp.results) {
                const figsHarryPotter = filterMinifigs(resp.results, "Harry Potter");
                if (figsHarryPotter.length) {
                    temporaryStorage = temporaryStorage.concat(figsHarryPotter);
                }

                if (resp.next) {
                    nextURL = resp.next;
                    recursiveSingleFetch();
                } else {
                    theEnd(temporaryStorage);
                    console.log(" no next, it should stop");
                }
            } else {
                theEnd(temporaryStorage);
                console.log("dziwne miejsce w pętli");
            }
        }
    }
    recursiveSingleFetch();
};

export default fetchData;
