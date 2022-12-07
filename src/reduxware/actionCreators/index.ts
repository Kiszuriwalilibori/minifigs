import { createAction } from "@reduxjs/toolkit";
import { ShowError, ShowMessage, Minifig } from "types/types";

export const showError = createAction<ShowError>("ERROR_SHOW");
export const clearError = createAction("ERROR_CLEAR");
export const startLoading = createAction("LOADING_START");
export const completeLoading = createAction<Minifig[]>("LOADING_COMPLETE");
export const setSelectedMinifig = createAction<Minifig | {}>("SELECTED_MINIFIG_SET");
export const setSelectedDetails = createAction<Minifig>("SELECTED_DETAILS_SET");
export const setParts = createAction<any>("SELECTED_PARTS_SET"); //nieprecyzyjnie typowane

export const showMessage = createAction<ShowMessage>("MESSAGE_SHOW");
export const hideMessage = createAction("MESSAGE_HIDE");

export const updateTeasers = createAction("TEASERS_UPDATE");
export const updateCounter = createAction("COUNTER_UPDATE");

export const setCategories = createAction("CATEGORIES_SET");
