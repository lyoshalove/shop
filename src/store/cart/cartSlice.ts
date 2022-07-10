import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/ProductTypes";

export interface CartState {
  products: IProduct[]
}

const initialState: CartState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.products = state.products.filter((product: IProduct) => action.payload !== product.id);
    },
    clearCart(state) {
      state.products = [];
    }
  }
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;