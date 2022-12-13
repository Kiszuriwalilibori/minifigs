import React, { ReactNode } from "react";
import thunk from "redux-thunk";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import fetchReducer from "reduxware/reducers/fetchReducer";
import teasersReducer from "reduxware/reducers/teaserReducer";
import selectionReducer from "reduxware/reducers/selectedMinifigSlice";

import { partsApi } from "../api/partsApi";

const rootReducer = combineReducers({
    fetch: fetchReducer,
    teasers: teasersReducer,
    selection: selectionReducer,
    [partsApi.reducerPath]: partsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk).concat(partsApi.middleware),
});

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Provider store={store}>
            <Router>{children}</Router>
        </Provider>
    );
};

export default AppProvider;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
