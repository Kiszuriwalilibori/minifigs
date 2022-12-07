import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "../initialState_Selected";
import { setSelectedMinifig } from "../actionCreators";

const fetchReducer = createReducer(initialState, builder => {
    builder.addCase(setSelectedMinifig, (state, action) => {
        state.selectedMinifig = action.payload;
    });
});

export default fetchReducer;
