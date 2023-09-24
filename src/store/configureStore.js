import { configureStore } from "@reduxjs/toolkit";
import { cocktailSlice } from "../reducers/Cocktails";

const store = configureStore({
  reducer: {
    cocktails: cocktailSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
