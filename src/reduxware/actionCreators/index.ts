import { createAction } from "@reduxjs/toolkit";
import { Minifig, ShowError, ShowMessage } from "types";

export { setSelectedMinifigId, clearSelectedMinifigId } from "reduxware/reducers/chosenMinifigIdSlice";
export { setRunningFalse, setRunningTrue } from "reduxware/reducers/isRunningSlice";
export { setDraw, clearDraw } from "reduxware/reducers/drawSlice";

export const showError = createAction<ShowError>("ERROR_SHOW");
export const clearError = createAction("ERROR_CLEAR");
export const startLoading = createAction("LOADING_START");
export const completeLoading = createAction("LOADING_COMPLETE");
export const showMessage = createAction<ShowMessage>("MESSAGE_SHOW");
export const hideMessage = createAction("MESSAGE_HIDE");
export const updateTeasers = createAction<Minifig>("TEASERS_UPDATE");
export const updateCounter = createAction<number>("COUNTER_UPDATE");
export const resetCounter = createAction("COUNTER_RESET");
export const resetTeasers = createAction("RESET_TEASERS");
export const setPagesCount = createAction<number>("PAGES_COUNT_SET");
