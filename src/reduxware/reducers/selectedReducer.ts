import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "../initialState_Selected";
import { setSelectedMinifig, setSelectedDetails, setParts } from "../actionCreators";

const fetchReducer = createReducer(initialState, builder => {
    builder
        .addCase(setSelectedMinifig, (state, action) => {
            state.selectedMinifig = action.payload;
        })
        .addCase(setSelectedDetails, (state, action) => {
            state.selectedDetails = action.payload;
        })
        .addCase(setParts, (state, action) => {
            state.withParts = action.payload;
        });
});

export default fetchReducer;
