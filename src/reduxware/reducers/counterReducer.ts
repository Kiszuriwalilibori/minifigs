import { createReducer } from "@reduxjs/toolkit";

import { updateCounter, resetCounter } from "../actionCreators";
import { RootStateType } from "types";

const initialState = {
    counter: 0,
};

const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(updateCounter, state => {
            state.counter++;
        })
        .addCase(resetCounter, state => {
            state.counter = initialState.counter;
        });
});

export default counterReducer;

export const getCounter = (state: RootStateType) => state.counter.counter;
