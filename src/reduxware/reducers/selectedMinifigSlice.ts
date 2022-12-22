import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Minifig, SelectedMinifig } from "types";

const initialState = { minifig: {} as SelectedMinifig };

const selection = createSlice({
    name: "selection",
    initialState,
    reducers: {
        setSelection(state, action: PayloadAction<SelectedMinifig>) {
            state.minifig = action.payload;
        },
        clearSelection(state, action: PayloadAction<void>) {
            state.minifig = initialState.minifig;
        },
    },
});
export default selection.reducer;
export const { setSelection, clearSelection } = selection.actions;
export const getSelectedMinifig = (state: { selection: { minifig: SelectedMinifig } }) => state.selection.minifig;
export const getSelectedMinifigNumber = (state: { selection: { minifig: SelectedMinifig } }) => (state.selection.minifig as Minifig).set_num;
