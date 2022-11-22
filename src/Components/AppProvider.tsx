import React from "react";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import fetchReducer from "reduxware/reducers/fetchReducer";
import selectedReducer from "reduxware/reducers/selectedReducer";
import teasersReducer from "reduxware/reducers/teaserReducer";
import categoriesReducer from "reduxware/reducers/categoriesReducer";

const rootReducer = combineReducers({
    fetch: fetchReducer,
    selected: selectedReducer,
    teasers: teasersReducer,
    categories: categoriesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

const AppProvider: React.FC = ({ children }) => {
    return (
        <Provider store={store}>
            <Router basename={process.env.PUBLIC_URL}>{children}</Router>
        </Provider>
    );
};

export default AppProvider;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
