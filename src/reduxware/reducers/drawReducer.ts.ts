import { createReducer } from "@reduxjs/toolkit";
import { clearDraw, setDraw } from "../actionCreators";
import { Minifigs } from "types";

export const initialState = {
    minifigs: [] as Minifigs,
};

const drawReducer = createReducer(initialState, builder => {
    builder
        .addCase(setDraw, (state, action) => {
            state.minifigs = action.payload;
        })

        .addCase(clearDraw, state => {
            state.minifigs = initialState.minifigs;
        });
});

export default drawReducer;
