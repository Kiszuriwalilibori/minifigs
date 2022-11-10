import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "../initialState_Teaser";
import { updateTeasers, updateCounter } from "../actionCreators";

const teasersReducer = createReducer(initialState, builder => {
    builder.addCase(updateTeasers, (state, action) => {
        if (action.payload) {
            const minifigs = state.minifigs;
            minifigs.push(action.payload);
            state.minifigs = minifigs;
        }
    });
    builder.addCase(updateCounter, state => {
        state.counter++;
        console.log(state.counter);
    });
});

export default teasersReducer;
