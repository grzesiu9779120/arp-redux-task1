import { createSlice } from "@reduxjs/toolkit";
import { RootStoreType } from "../store";
import { IAddProduct } from "./actions/add-product.action";
import { IRemoveProduct } from "./actions/remove-product.action";
import { basketInitialState } from "./basket.state";

export const basketSlice = createSlice({
  name: "basket",
  initialState: basketInitialState,
  reducers: {
    addProduct: (state, { payload }: IAddProduct) => {
      
      let found:boolean = false;
      if(state.basket.filter(basketItem => basketItem.id === payload.id).length) found=true

      if(!found){
        const totalPrice = payload.quantity * payload.price;
        state.basket.push({ ...payload, totalPrice });
      }else{
        state.basket.map((basketItem, index) =>{
          if(basketItem.id === payload.id)
            state.basket[index].quantity++ 
          //  state.basket[index].totalPrice = state.basket[index].quantity * payload.price
        })
      }
      
    },
    removeProduct: (state, { payload }: IRemoveProduct) => {
      state.basket = state.basket.filter(basketItem => basketItem.id !== payload.id)
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;

export const basketStateSelcetor = (state: RootStoreType) => state.basket;

export default basketSlice.reducer;
