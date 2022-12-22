import { useCallback, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import useDispatchAction from "hooks/useDispatchAction";

import { fetchData, createRedirect } from "functions";
import { BasicButton, Error, LoadingIndicator, Teaser } from "components";
import { useSelector } from "react-redux";
import { getRunningStatus } from "reduxware/reducers/isRunningSlice";

const initialURL = "https://rebrickable.com/api/v3/lego/minifigs/?key=" + process.env.REACT_APP_MINIFIGS_KEY;

interface Props {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export const Intro_Page = (props: Props) => {
    const { isError, isLoading, errorMessage } = props;
    const history = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const redirect = useMemo(createRedirect(history), []);
    const { clearError, clearSelection, clearDraw, setRunningTrue } = useDispatchAction();

    const refButton = useRef<HTMLButtonElement>(null);
    const isRunning = useSelector(getRunningStatus);

    useEffect(() => {
        if (!isRunning) {
            clearSelection();
            clearDraw();
            setRunningTrue();
        }
        refButton.current && refButton.current.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClear = useCallback(() => {
        clearError();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="intro">
                <div className="intro__content-box">
                    <h1> LEGO MINIFIGS MYSTERY BOX</h1>
                    <BasicButton
                        className="button uppercased"
                        ref={refButton}
                        onClick={e => {
                            fetchData(initialURL, redirect);
                        }}
                    >
                        Lets'go
                    </BasicButton>
                </div>
                <Teaser />
            </div>

            {isLoading && <LoadingIndicator />}
            {isError && <Error message={errorMessage} handleClear={handleClear} />}
        </>
    );
};
