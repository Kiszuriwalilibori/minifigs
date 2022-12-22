import { createReducer } from "@reduxjs/toolkit";

import { updateTeasers, updateCounter, resetTeasers } from "../actionCreators";
import { Minifigs } from "types";

const initialState = {
    minifigs: [] as Minifigs,
    counter: 0,
};

const teasersReducer = createReducer(initialState, builder => {
    builder.addCase(updateTeasers, (state, action) => {
        if (action.payload) {
            state.minifigs.push(action.payload);
        }
    });
    builder.addCase(updateCounter, state => {
        state.counter++;
    });
    builder.addCase(resetTeasers, state => {
        state.counter = 0;
        state.minifigs = [];
    });
});

export default teasersReducer;
