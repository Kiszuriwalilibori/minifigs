import axios from "axios";

import { useNavigate } from "react-router-dom";
import { store } from "components/AppProvider";
import { filterMinifigs, draw, isOffline } from "functions";
import { Paths } from "routes/paths";
import { FetchMinifigsResponse, Minifigs, ShowError } from "types";
import { SUBJECT, START_URL } from "../config";
import { useDispatchAction } from "./useDispatchAction";

const useFetchMinifigs = () => {
    const navigate = useNavigate();
    const { setDraw } = useDispatchAction();

    const fetchMinifigs = () => {
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
        let sizeSent = false;
        let counter = 0;

        function happyEnd() {
            navigate(Paths.select);
            const trio = draw(temporaryStorage);
            setDraw(trio);
            setTimeout(() => {
                store.dispatch({ type: "LOADING_COMPLETE" });
            }, 1000);
        }

        function emptyEnd() {
            const showErrorPayload: ShowError = {
                isError: true,
                errorMessage: "Apparently dementors sucked all the figs",
            };
            store.dispatch({ type: "ERROR_SHOW", payload: showErrorPayload });
        }

        function theEnd() {
            store.dispatch({ type: "RESET_TEASERS" });
            if (temporaryStorage.length === 0) {
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
                            store.dispatch({ type: "PAGES_COUNT_SET", payload: resp.count });
                        }
                        const filteredMinifigs = filterMinifigs(resp.results, SUBJECT);
                        if (filteredMinifigs.length) {
                            temporaryStorage = temporaryStorage.concat(filteredMinifigs);
                            counter++;
                            if (temporaryStorage[counter]) {
                                store.dispatch({ type: "TEASERS_UPDATE", payload: temporaryStorage[counter] });
                            }
                        }

                        if (resp.next) {
                            nextURL = resp.next;
                            setTimeout(recursiveSingleFetch, 1000);
                            store.dispatch({ type: "COUNTER_UPDATE" });
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
                const showErrorPayload: ShowError = { isError: true, errorMessage: message };
                store.dispatch({ type: "ERROR_SHOW", payload: showErrorPayload });
            }
        }
        recursiveSingleFetch();
    };
    return fetchMinifigs;
};
export default useFetchMinifigs;
