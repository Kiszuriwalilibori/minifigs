import { createAction } from "@reduxjs/toolkit";
import { ShowError, Minifig } from "types/types";

export const showError = createAction<ShowError>("ERROR_SHOW");
export const clearError = createAction("ERROR_CLEAR");
export const startLoading = createAction("LOADING_START");
export const completeLoading = createAction<Minifig[]>("LOADING_COMPLETE");
export const setSelectedMinifig = createAction<Minifig | {}>("SELECTED_MINIFIG_SET");
export const setSelectedDetails = createAction<Minifig>("SELECTED_DETAILS_SET");
