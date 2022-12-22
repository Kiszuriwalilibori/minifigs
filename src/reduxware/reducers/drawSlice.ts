import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Minifigs } from "types";

//function setDraw<T> (state:T, action:PayloadAction<T>){ state =action.payload}

const initialState = { minifigs: [] as Minifigs };

const draw = createSlice({
    name: "draw",
    initialState,
    reducers: {
        setDraw(state, action: PayloadAction<Minifigs>) {
            state.minifigs = action.payload;
        },

        clearDraw(state, action: PayloadAction<void>) {
            state.minifigs = initialState.minifigs;
        },
    },
});
export default draw.reducer;
export const { setDraw, clearDraw } = draw.actions;
export const getDraw = (state: { draw: { minifigs: Minifigs } }) => state.draw.minifigs;
