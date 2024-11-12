import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postSlicReducer } from "./reducers/post";
  
export const rootReducer = combineReducers({
    post: postSlicReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
