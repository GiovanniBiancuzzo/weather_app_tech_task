import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import weatherInfosReducer from "../reducers/weatherInfosReducer";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const mainReducer = combineReducers({
    search: searchReducer,
    weatherInfos: weatherInfosReducer
    // favourite:favouritesReducer,
});

const persistConfig = ({
    key: 'root',
    storage,
    // blacklist: 'weatherInfos'
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistedStore = persistStore(store);