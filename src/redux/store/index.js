import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import weatherInfosReducer from "../reducers/weatherInfosReducer";

const mainReducer = combineReducers({
    search: searchReducer,
    weatherInfos: weatherInfosReducer

});
export const store = configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});