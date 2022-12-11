import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherInfosReducer from "../reducers/weatherInfosReducer";
import favouritesReducer from "../reducers/favouritesReducer";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireIn from "redux-persist-transform-expire-in";

const mainReducer = combineReducers({
    weatherInfos: weatherInfosReducer,
    favourites: favouritesReducer,
});

const expireTime = 1 * 60 * 60 * 1000; // expire in 48h, ore * minuti * secondi * millisecondi
const expirationKey = "expirationKey";
const persistConfig = ({
    key: 'root',
    storage,
    blacklist: 'weatherInfos',
    transforms: [expireIn(expireTime, expirationKey, [])]

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