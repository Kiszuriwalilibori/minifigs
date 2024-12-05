import axios from "axios";

import { useNavigate } from "react-router-dom";
import { draw, getMatchingMinifigs, isOffline, TemporaryStorage } from "functions";
import { Paths } from "routes/paths";
import { FetchMinifigsResponse, Minifig, ShowError } from "types";
import { SUBJECT, START_URL } from "../config";
import { useDispatchAction } from "./useDispatchAction";

const createError = (message: string): ShowError => {
    return { isError: true, errorMessage: message };
};

const useFetchMinifigs = () => {
    const navigate = useNavigate();
    const { completeLoading, updateCounter, resetCounter, resetTeasers, setDraw, setPagesCount, showError, startLoading, updateTeasers } = useDispatchAction();

    const fetchMinifigs = () => {
        if (isOffline()) {
            showError(createError("No Internet connection"));
            return;
        }
        const storage = new TemporaryStorage<Minifig>([] as Minifig[]);
        var nextURL: string;
        let sizeSent = false;
        let counter = 0;

        startLoading();

        function happyEnd() {
            navigate(Paths.select);
            const outcome = draw(storage.minifigs);
            setDraw(outcome);
            setTimeout(() => {
                completeLoading();
                resetCounter();
            }, 1000);
        }

        function emptyEnd() {
            showError(createError("Apparently dementors sucked all the figs"));
            resetCounter();
        }

        function theEnd() {
            resetTeasers();
            if (storage.isEmpty()) {
                emptyEnd();
            } else {
                happyEnd();
            }
        }

        async function recursiveSingleFetch() {
            var fullPath = nextURL || START_URL;
            try {
                const { data } = await axios.get<FetchMinifigsResponse>(fullPath);
                if (data) {
                    const resp = data;
                    if (resp && resp.results) {
                        if (!sizeSent && resp.count) {
                            sizeSent = true;
                            setPagesCount(resp.count);
                        }
                        const filteredMinifigs = getMatchingMinifigs(resp.results, SUBJECT);
                        if (filteredMinifigs.length) {
                            storage.add(filteredMinifigs);
                            counter++;
                            if (storage.getMinifigByIndex(counter)) {
                                updateTeasers(storage.getMinifigByIndex(counter));
                            }
                        }

                        if (resp.next) {
                            nextURL = resp.next;
                            setTimeout(recursiveSingleFetch, 1000);
                            updateCounter(counter);
                        } else {
                            theEnd();
                        }
                    } else {
                        theEnd();
                    }
                }
            } catch (error) {
                let message;
                if (axios.isAxiosError(error)) {
                    message = error.message;
                } else {
                    message = JSON.stringify(error);
                }

                showError(createError(message));
            }
        }
        recursiveSingleFetch();
    };
    return fetchMinifigs;
};
export default useFetchMinifigs;
