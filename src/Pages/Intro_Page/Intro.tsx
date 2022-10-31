import { useCallback, useEffect, useRef, useMemo } from "react";

import { withRouter } from "react-router";

import fetchData from "js/fetchData";
import useDispatchAction from "hooks/useDispatchAction";

import { BasicButton, Message, LoadingIndicator } from "Components";
import { RootStateType } from "types/types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import React from "react";
import createRedirect from "js/createRedirect";

const initialURL = "https://rebrickable.com/api/v3/lego/minifigs/?key=" + process.env.REACT_APP_MINIFIGS_KEY;

// var initialURL = "https://rebrickable.com/api/v3/lego/minifigs/?key=8e442d7f1155bab4074dbff1e76bc680";

interface Props {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

const Intro = (props: Props) => {
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
        <>
            <div className="intro">
                <div className="intro__content-box">
                    <h1> LEGO MINIFIGS MYSTERY BOX</h1>
                    <BasicButton
                        className="button uppercased"
                        ref={refButton}
                        onClick={() => fetchData(initialURL, redirect)}
                    >
                        Lets'go
                    </BasicButton>
                </div>
            </div>
            {isLoading && <LoadingIndicator />}
            {isError && <Message message={errorMessage} handleClear={handleClear} />}
        </>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    isLoading: state.fetch.isLoading,
    isError: state.fetch.isError,
    errorMessage: state.fetch.errorMessage,
});

export default withRouter(connect(mapStateToProps, {})(Intro));

/**
 * todo
 */

// https://rebrickable.com/api/v3/lego/minifigs/fig-006052/parts/?key=8e442d7f1155bab4074dbff1e76bc680
