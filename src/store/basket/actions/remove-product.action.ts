import { PayloadAction } from "@reduxjs/toolkit";

interface IRemoveProductPayload {
  id: string;
}

export interface IRemoveProduct extends PayloadAction<IRemoveProductPayload> {}
