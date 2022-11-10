import Fade from "@material-ui/core/Fade";

import { useCallback, useEffect, useRef, useMemo } from "react";
import { useHistory } from "react-router-dom";

import fetchData from "functions/fetchData";
import useDispatchAction from "hooks/useDispatchAction";
import createRedirect from "functions/createRedirect";
import { BasicButton, Error, LoadingIndicator, Teaser } from "components";

const initialURL = "https://rebrickable.com/api/v3/lego/minifigs/?key=" + process.env.REACT_APP_MINIFIGS_KEY;

interface Props {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export const Intro_Page = (props: Props) => {
    const { isError, isLoading, errorMessage } = props;
    const history = useHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const redirect = useMemo(createRedirect(history), []);
    const { clearError } = useDispatchAction();

    const refButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        refButton.current && refButton.current.focus();
    }, []);

    const handleClear = useCallback(() => {
        clearError();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fade in={true} timeout={1500}>
            <>
                <div className="intro">
                    <div className="intro__content-box">
                        <h1> LEGO MINIFIGS MYSTERY BOX</h1>
                        <BasicButton className="button uppercased" ref={refButton} onClick={() => fetchData(initialURL, redirect)}>
                            Lets'go
                        </BasicButton>
                    </div>
                    <Teaser />
                </div>
                {isLoading && <LoadingIndicator />}
                {isError && <Error message={errorMessage} handleClear={handleClear} />}
            </>
        </Fade>
    );
};
