import { RootStateType } from "components/AppProvider";

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
    anyMessage: string;
}

type HistoryCall = () => void;

type RedirectType = {
    [Item in PathKeys]: HistoryCall;
};
type SelectedDetails = any;

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

interface SendOrderArgs {
    redirect: RedirectType;
    data: any;
}

export type { RootStateType, PathKeys, Category, Minifig, Minifigs, ShowError, ShowMessage, HistoryCall, RedirectType, SelectedDetails, SelectedMinifig, PartsItem, Results, SendOrderArgs, SendOrder };
