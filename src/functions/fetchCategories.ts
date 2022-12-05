import { store } from "components/AppProvider";

import { ShowError, Category } from "types/types";

const fetchCategories = (path: string) => {
    let temporaryStorage: Category[] = [];
    var nextURL: string;
    store.dispatch({ type: "LOADING_START" });

    function happyEnd() {
        store.dispatch({ type: "CATEGORIES_SET", payload: temporaryStorage });
        store.dispatch({ type: "LOADING_COMPLETE", payload: [] });
    }

    function emptyEnd() {
        const showErrorPayload: ShowError = {
            isError: true,
            errorMessage: "Apparently dementors sucked all the categories",
        };
        store.dispatch({ type: "ERROR_SHOW", payload: showErrorPayload });
    }

    function theEnd(storage: Category[]) {
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
                temporaryStorage = temporaryStorage.concat(resp.results);
                if (resp.next) {
                    nextURL = resp.next;
                    setTimeout(recursiveSingleFetch, 10);
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

export default fetchCategories;
