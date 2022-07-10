import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice';
import notificationsReducer from "./notifications/notificationsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    notifications: notificationsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;