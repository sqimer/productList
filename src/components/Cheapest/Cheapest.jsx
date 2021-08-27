import React from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./cheapest.style";
import ModalWindow from "../Modal/ModalWindow";

const Cheapest = () => {
  const list = useSelector((state) => state.productList);
  const prodList = list.sort((a, b) => a.price - b.price).slice(0, 1);

  return (
    <Wrapper>
      {prodList.map((item, i) => {
        return <ModalWindow key={i} text="Buy cheapest" prodList={item} />;
      })}
    </Wrapper>
  );
};

export default Cheapest;
