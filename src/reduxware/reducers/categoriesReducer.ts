import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "reduxware/initialState_Categories";
import { setCategories } from "../actionCreators";

const teasersReducer = createReducer(initialState, builder => {
    builder.addCase(setCategories, (state, action) => {
        if (action.payload) {
            state.categories = action.payload;
        }
    });
});

export default teasersReducer;
