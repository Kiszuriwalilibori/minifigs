import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { showError, showMessage, hideMessage } from "../actionCreators";
import { RedirectType, RootStateType } from "types";

const path = "https://jsonplaceholder.typicode.com/posts";

const timeout = 5000;

export const sendOrder = (redirect: RedirectType, data: any): ThunkAction<void, RootStateType, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        fetch(path, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(res => res.json())
            .then(json => {
                if (json) {
                    try {
                        dispatch(showMessage({ isMessage: true, anyMessage: "Your order has been successfully proceeded" }));
                        setTimeout(redirect.intro, timeout);
                        setTimeout(hideMessage, timeout);
                    } catch (error) {
                        dispatch(showError({ isError: true, errorMessage: "Error occured during order placing" }));
                    }
                } else {
                    dispatch(showError({ isError: true, errorMessage: "Empty data received from receiver's endpoint" }));
                }
            })
            .catch(error => {
                const result = {
                    isError: true,
                    errorMessage: error.message,
                };
                dispatch(showError(result));
            });
    };
};

export type SendOrder = typeof sendOrder;
