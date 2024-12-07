import { createReducer } from "@reduxjs/toolkit";
import { showError, clearError, startLoading, completeLoading, showMessage, hideMessage } from "../actionCreators";
import { RootStateType } from "components/AppProvider";

export const initialState = {
    errorMessage: "",
    isError: false,
    isLoading: false,
    isFetched: false,
    message: "",
    isMessage: false,
};

const fetchReducer = createReducer(initialState, builder => {
    builder
        .addCase(showError, (state, action) => {
            const { isError, errorMessage } = action.payload;
            state.isError = isError;
            state.errorMessage = errorMessage;
            state.isLoading = false;
        })
        .addCase(clearError, state => {
            state.isError = false;
            state.errorMessage = "";
        })
        .addCase(startLoading, state => {
            state.isLoading = true;
        })
        .addCase(completeLoading, state => {
            state.isLoading = false;
            state.isError = false;
            state.errorMessage = "";
        })
        .addCase(showMessage, (state, action) => {
            const { message } = action.payload;
            state.isMessage = true;
            if (action.payload) state.message = message;
        })
        .addCase(hideMessage, (state, action) => {
            state.isMessage = false;
            state.message = "";
        });
});

export default fetchReducer;

export const getIsLoading = (state: RootStateType) => state.fetch.isLoading;
