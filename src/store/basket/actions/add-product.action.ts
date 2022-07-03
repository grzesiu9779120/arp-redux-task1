import { PayloadAction } from "@reduxjs/toolkit";

interface IAddProductPayload {
  id: string;
  title: string;
  quantity: number;
  price: number;
}

export interface IAddProduct extends PayloadAction<IAddProductPayload> {}
