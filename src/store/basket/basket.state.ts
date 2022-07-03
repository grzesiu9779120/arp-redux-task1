import { IProduct } from "../../mocks/products";
import { productsMocks } from "../../mocks/products";

export interface IBasketItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface IBasketState {
  products: IProduct[];
  basket: IBasketItem[];
  id: string;
}

export const basketInitialState: IBasketState = {
  basket: [],
  products: productsMocks,
  id: "MY_BASKET_ID",
};
