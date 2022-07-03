import ProductList from "./ProductList/ProductList";
import { useAppSelector } from "../store/hooks/useAppSelector";

import * as S from "./Basket.style";

const Basket = () => {
  const basketState = useAppSelector((state) => state.basket);
  console.log(basketState.basket);

  return (
    <S.Container>
      <ProductList />
      <S.BasketDetails>
        {basketState.basket.map((basketItem) => (
          <S.BasketPosition>
            <span>{basketItem.title}</span>
            <span>{basketItem.id}</span>
            <span>{basketItem.price}</span>
            <span>{basketItem.quantity}</span>
            <span>{basketItem.totalPrice}</span>
            <S.DeleteButton>Delete</S.DeleteButton>
          </S.BasketPosition>
        ))}
      </S.BasketDetails>
    </S.Container>
  );
};

export default Basket;
