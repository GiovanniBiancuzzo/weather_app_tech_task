import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherInfosReducer from "../reducers/weatherInfosReducer";
import favouritesReducer from "../reducers/favouritesReducer";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const mainReducer = combineReducers({
    weatherInfos: weatherInfosReducer,
    favourites: favouritesReducer,
});

const persistConfig = ({
    key: 'root',
    storage,
    blacklist: 'weatherInfos'
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