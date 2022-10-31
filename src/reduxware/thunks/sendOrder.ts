import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { showError } from "../actionCreators";
import { RedirectType, RootStateType } from "types";

const path = "https://jsonplaceholder.typicode.com/posts";

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
                        console.log("json from sendOrder", json);
                        redirect.intro();
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
