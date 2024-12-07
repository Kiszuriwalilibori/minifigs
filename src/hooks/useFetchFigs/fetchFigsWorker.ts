import axios from "axios";
import { getMatchingMinifigs, TemporaryStorage } from "functions";
import { FetchMinifigsResponse, Minifig, ShowError } from "types";
import { SUBJECT, START_URL } from "../../config";

/* eslint-disable no-restricted-globals */
const createError = (message: string): ShowError => {
    return { isError: true, errorMessage: message };
};

self.onmessage = function (event) {
    const storage = new TemporaryStorage<Minifig>([] as Minifig[]);
    var nextURL: string;
    let sizeSent = false;
    let counter = 0;
    let teaser: Minifig = {} as Minifig;
    async function recursiveFetch() {
        var fullPath = nextURL || START_URL;
        try {
            const { data } = await axios.get<FetchMinifigsResponse>(fullPath);
            if (data) {
                const resp = data;
                if (resp && resp.results) {
                    if (!sizeSent && resp.count) {
                        sizeSent = true;
                        self.postMessage({ pagesCount: resp.count });
                    }
                    const matchingMinifigs = getMatchingMinifigs(resp.results, SUBJECT);
                    if (matchingMinifigs.length) {
                        storage.add(matchingMinifigs);
                        counter++;
                        if (storage.getMinifigByIndex(counter)) {
                            teaser = storage.getMinifigByIndex(counter);
                        }
                        self.postMessage({ counter, teaser });
                    }

                    if (resp.next) {
                        nextURL = resp.next;
                        setTimeout(recursiveFetch, 1000);
                        self.postMessage({ counter });
                    } else {
                        self.postMessage(storage);
                    }
                } else {
                    self.postMessage(storage);
                    self.postMessage({ error: createError("Podczas pobierania wystapił błąd, prawdopodobnie nie wszystkie minifigsy zostały pobrane") });
                }
            }
        } catch (error) {
            const message = axios.isAxiosError(error) ? error.message : JSON.stringify(error);
            self.postMessage({ error: createError(message) });
        }
    }
    recursiveFetch();
};
