import { createReducer } from "@reduxjs/toolkit";

import { initialState } from "../initialState_Fetch";
import { showError, clearError, startLoading, completeLoading } from "../actionCreators";

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
            console.log("state minifigs", state.minifigs);
        });
});

export default fetchReducer;
