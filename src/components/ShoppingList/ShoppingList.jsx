import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./shoppingList.style";
import { requestList } from "../../redux/action";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const shopList = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(requestList());
  }, [dispatch]);

  return (
    <Wrapper>
      {shopList.map((item, i) => (
        <ShoppingItem key={i} product={item} />
      ))}
    </Wrapper>
  );
};

export default ShoppingList;
