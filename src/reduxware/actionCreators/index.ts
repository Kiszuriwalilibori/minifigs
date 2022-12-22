import { createAction } from "@reduxjs/toolkit";
import { ShowError, ShowMessage, Minifig } from "types/types";
export { setSelection, clearSelection } from "reduxware/reducers/selectedMinifigSlice";
export { setRunningFalse, setRunningTrue } from "reduxware/reducers/isRunningSlice";

export const showError = createAction<ShowError>("ERROR_SHOW");
export const clearError = createAction("ERROR_CLEAR");
export const startLoading = createAction("LOADING_START");
export const completeLoading = createAction("LOADING_COMPLETE");
export const setDraw = createAction<Minifig[]>("DRAW_SET");
export const clearDraw = createAction("DRAW_CLEAR");

export const showMessage = createAction<ShowMessage>("MESSAGE_SHOW");
export const hideMessage = createAction("MESSAGE_HIDE");

export const updateTeasers = createAction("TEASERS_UPDATE");
export const updateCounter = createAction("COUNTER_UPDATE");
export const resetTeasers = createAction("RESET_TEASERS");
