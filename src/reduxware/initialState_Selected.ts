import { SelectedDetails, SelectedMinifig, PartsItem } from "types";

export const initialState = {
    selectedMinifig: {} as SelectedMinifig,
    selectedDetails: {} as SelectedDetails,
    withParts: [] as PartsItem[],
};
