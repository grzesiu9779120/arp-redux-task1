import { useAppSelector } from "../../store/hooks/useAppSelector";
import Product from "./Product.tsx/Product";

import * as S from "./ProductList.style";

const ProductList = () => {
  const basketState = useAppSelector((state) => state.basket);
  return (
    <S.Container>
      {basketState.products.map((product) => {
        return (
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </S.Container>
  );
};

export default ProductList;
