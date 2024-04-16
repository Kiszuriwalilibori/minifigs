import { createReducer } from "@reduxjs/toolkit";

import { setPagesCount } from "../actionCreators";
import { RootStateType } from "types";

const initialState = {
    pagesCount: 0,
};

export const pagesCountReducer = createReducer(initialState, builder => {
    builder.addCase(setPagesCount, (state, action) => {
        if (action.payload) state.pagesCount = action.payload;
    });
});

export default pagesCountReducer;

export const getPagesCount = (state: RootStateType) => state.pagesCount.pagesCount;
