import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "../initialState_Teaser";
import { updateTeasers, updateCounter } from "../actionCreators";

const teasersReducer = createReducer(initialState, builder => {
    builder.addCase(updateTeasers, (state, action) => {
        if (action.payload) {
            //state.minifigs = action.payload;
            state.minifigs.push(action.payload);
        }
    });
    builder.addCase(updateCounter, state => {
        state.counter++;
    });
});

export default teasersReducer;
