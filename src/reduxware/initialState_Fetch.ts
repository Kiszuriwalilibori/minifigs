import { Minifig } from "types/types";

export const initialState = {
    errorMessage: "",
    isError: false,
    isLoading: false,
    isFetched: false,
    minifigs: [] as Minifig[],
    messageMessage: "",
    isMessage: false,
};
