import { useCallback } from "react";

import { useDispatchAction, useCheckApiKey, useClearPersistsBeforeFirstRun, useInitialFocus, useManageFetch } from "hooks";
import { BasicButton, Error, LoadingIndicator } from "components";

import Teaser from "./components/Teaser";
import useFetchMinifigs from "hooks/useFetchMinifigs";

interface Props {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export const Intro_Page = (props: Props) => {
    const { isError, isLoading, errorMessage } = props;
    const fetchMinifigs = useFetchMinifigs();
    const startFetchMinifigs = useManageFetch(fetchMinifigs);
    const isApiKeyAvailable = useCheckApiKey();
    const { clearError } = useDispatchAction();

    const { initialFocus: buttonRef } = useInitialFocus<HTMLButtonElement>();

    useClearPersistsBeforeFirstRun();

    const handleClear = useCallback(() => {
        clearError();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isApiKeyAvailable) return null;
    return (
        <main className="intro">
            <div className="intro__content-box">
                <h1> LEGO MINIFIGS MYSTERY BOX</h1>
                <BasicButton disabled={isLoading} className="button uppercased" aria-label="Fetch data of minifigs" ref={buttonRef} onClick={/*setShouldFetchTrue*/ startFetchMinifigs}>
                    Lets'go
                </BasicButton>
            </div>
            <Teaser />
            {isLoading && <LoadingIndicator />}
            {isError && <Error message={errorMessage} handleClear={handleClear} />}
        </main>
    );
};
