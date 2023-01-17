import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Minifigs } from "types";

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
