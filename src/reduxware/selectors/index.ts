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

const getNumber = (fig: Minifig) => fig.set_num;

export const getSelectedMinifig = createSelector(getDraw, getSelectedMinifigId, getSelected);

export const getSelectedMinifigNumber = createSelector(getSelectedMinifig as any, getNumber);

export { getRunningStatus } from "reduxware/reducers/isRunningSlice";
export { getCounter } from "reduxware/reducers/counterReducer";
