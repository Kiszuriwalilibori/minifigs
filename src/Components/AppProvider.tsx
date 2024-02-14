import React, { ReactNode } from "react";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { counterReducer, drawReducer, fetchReducer, pagesCountReducer, runningReducer, selectedMinifigIdReducer, teasersReducer } from "reduxware/reducers";

import { partsApi } from "../pages/Order_Page/utils/partsApi";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";

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
    pagesCount: pagesCountReducer,
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
        }).concat(partsApi.middleware),
});
let persistor = persistStore(store);
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
        >
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>{children}</Router>
                </PersistGate>
            </Provider>
        </SnackbarProvider>
    );
};

export default AppProvider;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
