import { createSlice } from "@reduxjs/toolkit";
import { RootStoreType } from "../store";
import { IAddProduct } from "./actions/add-product.action";
import { basketInitialState } from "./basket.state";

export const basketSlice = createSlice({
  name: "basket",
  initialState: basketInitialState,
  reducers: {
    addProduct: (state, { payload }: IAddProduct) => {
      const totalPrice = payload.quantity * payload.price;
      state.basket.push({ ...payload, totalPrice });
    },
    // removeProduct: (state, {payload}:  number) => {

    // }
  },
});

export const { addProduct } = basketSlice.actions;

export const basketStateSelcetor = (state: RootStoreType) => state.basket;

export default basketSlice.reducer;
