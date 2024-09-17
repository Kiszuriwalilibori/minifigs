import { useCheckApiKey, useClearPersistsBeforeFirstRun, useInitialFocus, useManageFetch } from "hooks";
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
    const fetchMinifigs = useFetchMinifigs();
    const startFetchMinifigs = useManageFetch(fetchMinifigs);
    const isApiKeyAvailable = useCheckApiKey();

    const { initialFocus: buttonRef } = useInitialFocus<HTMLButtonElement>();

    useClearPersistsBeforeFirstRun();

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
            {/* <LoadingIndicator /> */}
            {isLoading && <LoadingIndicator />}
            <Error />
        </main>
    );
};
