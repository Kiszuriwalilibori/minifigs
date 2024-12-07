import { shallowEqual, useSelector } from "react-redux";
import { getIsLoading } from "reduxware/selectors";

import { useCheckApiKey, useClearPersistsBeforeFirstRun, useEnhancedState, useFetchFigs, useInitialFocus } from "hooks";
import { BasicButton, Error, LoadingIndicator } from "components";

import Teaser from "./components/Teaser";

import { Action } from "types/index";

interface Props {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export const Intro_Page = (props: Props) => {
    const isLoading = useSelector(getIsLoading, shallowEqual);
    const isApiKeyAvailable = useCheckApiKey();
    const { initialFocus: buttonRef } = useInitialFocus<HTMLButtonElement>();

    const [action, setAction, ,] = useEnhancedState<Action>("");

    useClearPersistsBeforeFirstRun();
    useFetchFigs(action);

    if (!isApiKeyAvailable) return null;
    return (
        <main className="intro">
            <div className="intro__content-box">
                <h1> LEGO MINIFIGS MYSTERY BOX</h1>

                <BasicButton disabled={isLoading} className="button uppercased" aria-label="Fetch data of minifigs" ref={buttonRef} onClick={() => setAction("start")}>
                    Lets'go
                </BasicButton>

                <BasicButton disabled={!isLoading} className="button button-cancel uppercased" aria-label="cancels fetching minifigs" onClick={() => setAction("stop")}>
                    Cancel
                </BasicButton>
            </div>

            <LoadingIndicator />
            <Teaser />
            <Error />
        </main>
    );
};
