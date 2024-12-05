import { useBoolean, useCheckApiKey, useClearPersistsBeforeFirstRun, useFetchFigs, useInitialFocus, useManageFetch } from "hooks";
import { BasicButton, Error, LoadingIndicator } from "components";

import Teaser from "./components/Teaser";
import useFetchMinifigs from "hooks/useFetchMinifigs";

interface Props {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export const Intro_Page = (props: Props) => {
    const { isLoading } = props;
    const [shouldFetch, setShouldFetchTrue, setShouldFetchFalse, ,] = useBoolean(false);

    const isApiKeyAvailable = useCheckApiKey();
    useFetchFigs(shouldFetch);

    const { initialFocus: buttonRef } = useInitialFocus<HTMLButtonElement>();

    useClearPersistsBeforeFirstRun();

    if (!isApiKeyAvailable) return null;
    return (
        <main className="intro">
            <div className="intro__content-box">
                <h1> LEGO MINIFIGS MYSTERY BOX</h1>
                <BasicButton disabled={isLoading} className="button uppercased" aria-label="Fetch data of minifigs" ref={buttonRef} onClick={setShouldFetchTrue}>
                    Lets'go
                </BasicButton>
            </div>
            <Teaser />
            {isLoading && <LoadingIndicator />}
            <Error />
        </main>
    );
};
