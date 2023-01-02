import { createReducer } from "@reduxjs/toolkit";

import { updateTeasers, resetTeasers } from "../actionCreators";
import { Minifig } from "types";

const initialState = {
    currentTeaser: {} as Minifig,
};

const teasersReducer = createReducer(initialState, builder => {
    builder.addCase(updateTeasers, (state, action) => {
        if (action.payload) {
            state.currentTeaser = action.payload;
        }
    });

    builder.addCase(resetTeasers, state => {
        state.currentTeaser = {} as Minifig;
    });
});

export default teasersReducer;
