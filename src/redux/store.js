import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { getProductsApi } from "../services/getProducts";

export const store = configureStore({
  reducer: {
    [getProductsApi.reducerPath]: getProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductsApi.middleware),
});

setupListeners(store.dispatch);
