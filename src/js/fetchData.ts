import { store } from "Components/AppProvider";
import filterMinifigs from "js/filterMinifigs";
import draw from "js/draw";

import { Minifig, RedirectType, ShowError } from "types/types";

// const ids = [
//     "e007ad9e034759e1cf1bc9128813e890",
//     "a61a22f340551989b83385c9963aeab0",
//     "e3f0729bd003330aa67d266a76314857",
//     "e3f0729bd003330aa67d266a76314857",
//     "d4b557c1d5c7e9c782d2a91bcd6fe7ed",
//     "9333447e9684807d2a5e1d30e8892ecb",
// ];

var counter = 1;
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
                }

                if (resp.next) {
                    nextURL = resp.next;
                    counter++;
                    console.log(counter);
                    //setTimeout(recursiveSingleFetch, 1000);
                    recursiveSingleFetch();
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

/**
 * todo React-hook-form
 */
