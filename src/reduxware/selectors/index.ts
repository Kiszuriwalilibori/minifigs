import { createSelector } from "@reduxjs/toolkit";
import { getSelectedMinifigId } from "reduxware/reducers/chosenMinifigIdSlice";
import { getDraw } from "reduxware/reducers/drawSlice";

import { Minifigs, Minifig } from "types";

const getSelected = (ary: Minifigs, id: string) => {
    const fig = ary.find(obj => {
        return obj.set_num === id;
    });
    return fig;
};

const getNumber = (fig: Minifig | undefined) => {
    return fig && fig.set_num ? fig.set_num : undefined;
};

export const getSelectedMinifig = createSelector(getDraw, getSelectedMinifigId, getSelected);

export const getSelectedMinifigNumber = createSelector(getSelectedMinifig, getNumber);

export { getRunningStatus } from "reduxware/reducers/isRunningSlice";
export { getCounter } from "reduxware/reducers/counterReducer";
export { getPagesCount } from "reduxware/reducers/pagesCountReducer";
export { getIsLoading } from "reduxware/reducers/fetchReducer";
