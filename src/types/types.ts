import { AppDispatch, RootStateType } from "components/AppProvider";

import { SendOrder } from "reduxware/thunks/sendOrder";

type PathKeys = "intro" | "order" | "select" | "nopage";

interface Minifig {
    set_num: string;
    name: string;
    num_parts: 4;
    set_img_url: string;
    set_url: string;
    last_modified_dt: string;
}

type Minifigs = Minifig[];

interface Category {
    id: number;
    parent_id: number;
    name: string;
}
type SelectedMinifig = Minifig | {};

interface ShowError {
    isError: boolean;
    errorMessage: string;
}

interface ShowMessage {
    isMessage: boolean;
    message: string;
}

interface PartsItem {
    part: {
        part_num: string;
        name: string;
        part_img_url: string;
        part_url: string;
    };
}

interface Results {
    results: PartsItem[];
}

interface FetchMinifigsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Minifig[];
}
type Action = "start" | "stop" | "";

export type { Action, AppDispatch, FetchMinifigsResponse, Category, Minifig, Minifigs, PathKeys, ShowError, ShowMessage, SelectedMinifig, PartsItem, Results, RootStateType, SendOrder };
