import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { NavigateFunction } from "react-router-dom";
import axios from "axios";

import { showError } from "../actionCreators";
import { RootStateType, ShowError } from "types";
import { Paths } from "routes/paths";
import { UseMessage } from "hooks/useMessage";

const URL = "https://jsonplaceholder.typicode.com/posts";

const SWITCH_TIMEOUT = 5000;

export const sendOrder = (navigate: NavigateFunction, showMessage: UseMessage, data: FormData): ThunkAction<void, RootStateType, unknown, Action> => {
    const options = {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    };

    return async dispatch => {
        axios
            .post(URL, data, options)
            .then(data => {
                if (data) {
                    try {
                        showMessage.success("Your order has been successfully proceeded");
                        setTimeout(() => navigate(Paths.intro), SWITCH_TIMEOUT);
                    } catch (error) {
                        dispatch(showError({ isError: true, errorMessage: "Error occured during order placing" }));
                    }
                } else {
                    dispatch(showError({ isError: true, errorMessage: "Empty data received from receiver's endpoint" }));
                }
            })
            .catch(error => {
                let result: ShowError;
                if (axios.isAxiosError(error)) {
                    result = {
                        isError: true,
                        errorMessage: "The following error occured when placing order: " + error.message,
                    };
                } else {
                    result = {
                        isError: true,
                        errorMessage: "Unknown error occured when placing order",
                    };
                }

                dispatch(showError(result));
            });
    };
};
export type SendOrder = typeof sendOrder;
