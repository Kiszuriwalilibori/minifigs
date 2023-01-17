import { createReducer } from "@reduxjs/toolkit";
import { showError, clearError, startLoading, completeLoading, showMessage, hideMessage } from "../actionCreators";

export const initialState = {
    errorMessage: "",
    isError: false,
    isLoading: false,
    isFetched: false,
    anyMessage: "",
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
            const { anyMessage } = action.payload;
            state.isMessage = true;
            if (action.payload) state.anyMessage = anyMessage;
        })
        .addCase(hideMessage, (state, action) => {
            state.isMessage = false;
            state.anyMessage = "";
        });
});

export default fetchReducer;
