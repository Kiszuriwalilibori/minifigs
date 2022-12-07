import React, { ReactNode } from "react";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import fetchReducer from "reduxware/reducers/fetchReducer";
import selectedReducer from "reduxware/reducers/selectedReducer";
import teasersReducer from "reduxware/reducers/teaserReducer";
import categoriesReducer from "reduxware/reducers/categoriesReducer";

import { partsApi } from "../api/partsApi";

const rootReducer = combineReducers({
    fetch: fetchReducer,
    selected: selectedReducer,
    teasers: teasersReducer,
    categories: categoriesReducer,
    [partsApi.reducerPath]: partsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk).concat(partsApi.middleware),
});

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Provider store={store}>
            <Router basename={process.env.PUBLIC_URL}>{children}</Router>
        </Provider>
    );
};

export default AppProvider;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
