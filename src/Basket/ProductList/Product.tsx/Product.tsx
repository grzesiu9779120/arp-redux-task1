import { IProduct } from "../../../mocks/products";
import { addProduct } from "../../../store/basket/basketSlice";
import { useAppDispatch } from "../../../store/hooks/useAppDispach";
import { useAppSelector } from "../../../store/hooks/useAppSelector";

import * as S from "./Product.style";

const Product = ({ id, title, price }: IProduct) => {
  const dispatch = useAppDispatch();

  return (
    <S.Container>
      <span>{id}</span>
      <span>{title}</span>
      <span>{price}</span>

      <S.AddButton
        onClick={() =>
          dispatch(
            addProduct({
              id,
              price,
              title,
              quantity: 1,
            })
          )
        }
      >
        ADD
      </S.AddButton>
    </S.Container>
  );
};

export default Product;
