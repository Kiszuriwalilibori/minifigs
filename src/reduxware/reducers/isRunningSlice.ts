import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { isRunning: false };

const running = createSlice({
    name: "selection",
    initialState,
    reducers: {
        setRunningTrue(state) {
            state.isRunning = true;
        },
        setRunningFalse(state) {
            state.isRunning = false;
        },
    },
});
export default running.reducer;
export const { setRunningFalse, setRunningTrue } = running.actions;
export const getRunningStatus = (state: { running: { isRunning: boolean } }) => state.running.isRunning;
