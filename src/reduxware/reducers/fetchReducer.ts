import { createReducer } from "@reduxjs/toolkit";
import { showError, clearError, startLoading, completeLoading, showMessage, hideMessage } from "../actionCreators";
import { Minifig } from "types/types";

export const initialState = {
    errorMessage: "",
    isError: false,
    isLoading: false,
    isFetched: false,
    minifigs: [] as Minifig[],
    messageMessage: "",
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
        .addCase(clearError, (state, action) => {
            state.isError = false;
            state.errorMessage = "";
        })
        .addCase(startLoading, (state, action) => {
            state.isLoading = true;
        })
        .addCase(completeLoading, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.errorMessage = "";
            state.minifigs = action.payload;
        })
        .addCase(showMessage, (state, action) => {
            const { isMessage, messageMessage } = action.payload;
            state.isMessage = true;
            if (action.payload) state.messageMessage = messageMessage;
        })
        .addCase(hideMessage, (state, action) => {
            state.isMessage = false;
            state.messageMessage = "";
        });
});

export default fetchReducer;
