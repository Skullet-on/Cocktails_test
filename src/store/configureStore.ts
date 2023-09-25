import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cocktailSlice } from "../reducers/Cocktails";

const store = configureStore({
    reducer: {
        cocktails: cocktailSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
