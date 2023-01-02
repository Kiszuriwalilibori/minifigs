import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { id: "" };

const selectedMinifigId = createSlice({
    name: "selectedMinifigId",
    initialState,
    reducers: {
        setSelectedMinifigId(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
        clearSelectedMinifigId(state, action: PayloadAction<void>) {
            state.id = initialState.id;
        },
    },
});
export default selectedMinifigId.reducer;
export const { setSelectedMinifigId, clearSelectedMinifigId } = selectedMinifigId.actions;
export const getSelectedMinifigId = (state: { selectedMinifigId: { id: string } }) => state.selectedMinifigId.id;
