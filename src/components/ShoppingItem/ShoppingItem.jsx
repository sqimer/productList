import React from "react";
import ModalWindow from "../Modal/ModalWindow";
import {
  Wrapper,
  Category,
  Name,
  Buy,
  Price,
  Bucks,
} from "./shoppingItem.style";

const ShoppingItem = ({ product }) => {
  return (
    <Wrapper>
      <Category>{product.category}</Category>
      <Name>{product.name}</Name>
      <Buy>
        <Price>
          <Bucks>$</Bucks>
          {product.price}
        </Price>
        <ModalWindow text="Buy" prodList={product} />
      </Buy>
    </Wrapper>
  );
};

export default ShoppingItem;
