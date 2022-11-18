import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalReducer";
const store = configureStore({
  reducer: {
    modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
