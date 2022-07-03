export interface IProduct {
  id: string;
  title: string;
  price: number;
}

export const productsMocks: IProduct[] = [
  {
    id: "product-id-1",
    price: 1.5,
    title: "Apple",
  },
  {
    id: "product-id-2",
    price: 3,
    title: "Bread",
  },
  {
    id: "product-id-3",
    price: 5,
    title: "Milk",
  },
  {
    id: "product-id-4",
    price: 1,
    title: "Beer",
  },
];
