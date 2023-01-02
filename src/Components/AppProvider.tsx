import React, { ReactNode } from "react";
import thunk from "redux-thunk";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import fetchReducer from "reduxware/reducers/fetchReducer";
import teasersReducer from "reduxware/reducers/teaserReducer";
import drawReducer from "reduxware/reducers/drawReducer.ts";
import runningReducer from "reduxware/reducers/isRunningSlice";
import selectedMinifigIdReducer from "reduxware/reducers/chosenMinifigIdSlice";
import counterReducer from "reduxware/reducers/counterReducer";

import { partsApi } from "../api/partsApi";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["draw", "selectedMinifigId"],
};

const rootReducer = combineReducers({
    fetch: fetchReducer,
    teasers: teasersReducer,
    draw: drawReducer,
    running: runningReducer,
    selectedMinifigId: selectedMinifigIdReducer,
    counter: counterReducer,
    [partsApi.reducerPath]: partsApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(thunk)
            .concat(partsApi.middleware),
});
let persistor = persistStore(store);
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>{children}</Router>
            </PersistGate>
        </Provider>
    );
};

export default AppProvider;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
