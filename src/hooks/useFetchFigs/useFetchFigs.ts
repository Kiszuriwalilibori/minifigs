import { useEffect } from "react";
import useGetWorker from "./useGetWorker";
import { useNavigate } from "react-router-dom";
import { useDispatchAction } from "hooks";
import { Action, ShowError } from "types";
import { draw, isOffline } from "functions";
import { Paths } from "routes/paths";

const createError = (message: string): ShowError => {
    return { isError: true, errorMessage: message };
};

export const useFetchFigs = (action: Action) => {
    const navigate = useNavigate();
    const { completeLoading, updateCounter, resetCounter, resetTeasers, setDraw, setPagesCount, showError, startLoading, updateTeasers } = useDispatchAction();
    const worker = useGetWorker();
    useEffect(() => {
        if (!action) {
            return;
        }
        if (action === "stop") {
            resetTeasers();
            resetCounter();
            completeLoading();
            worker.terminate();
            return;
        }

        if (action === "start") {
            startLoading();
        }

        if (isOffline()) {
            showError(createError("No Internet connection"));
            return; // todo powinno przekazywać sygnał do workera, przecież może się wydarzyć w każdej chwili
        }
        if (window.Worker) {
            worker.postMessage(null);
            worker.onerror = function (e) {
                completeLoading();
                showError(createError("fetchFigsWorker wywołał błąd: " + e.message));
                worker.terminate();
            };
            worker.onmessage = (e: MessageEvent<any>) => {
                if (e.data.counter) {
                    updateCounter(e.data.counter);
                }
                if (e.data.teaser) {
                    updateTeasers(e.data.teaser);
                }
                if (e.data.pagesCount) {
                    setPagesCount(e.data.pagesCount);
                }
                if (e.data.error) {
                    showError(e.data.error);
                }
                if (e.data.store) {
                    if (e.data.store.length) {
                        setDraw(draw(e.data.store));
                        navigate(Paths.select);
                    } else {
                        showError(createError("Apparently dementors sucked all the figs"));
                    }
                    worker.terminate();
                    resetTeasers();
                    setTimeout(() => {
                        completeLoading();
                        resetCounter();
                    }, 1000);
                }
            };
        }
        return () => {
            worker.terminate();
        };
    }, [action]);
};
export default useFetchFigs;
