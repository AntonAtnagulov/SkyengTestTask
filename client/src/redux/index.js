import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";

const rootReducer = combineReducers({
    items: itemSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
