import { RootStateType } from "Components/AppProvider";

type PathKeys = "intro" | "order" | "select";

interface Minifig {
    set_num: string;
    name: string;
    num_parts: 4;
    set_img_url: string;
    set_url: string;
    last_modified_dt: string;
}
type SelectedMinifig = Minifig | {};

interface ShowError {
    isError: boolean;
    errorMessage: string;
}

type HistoryCall = () => void;

type RedirectType = {
    [Item in PathKeys]: HistoryCall;
};
type SelectedDetails = any;

interface Atom {
    part_num: string;
    name: string;
    part_img_url: string;
    part_url: string;
}
interface PartsItem {
    part: Atom;
}

interface Results {
    results: { part: Atom }[];
}

export type {
    RootStateType,
    PathKeys,
    Minifig,
    ShowError,
    HistoryCall,
    RedirectType,
    SelectedDetails,
    SelectedMinifig,
    PartsItem,
    Results,
    Atom,
};
