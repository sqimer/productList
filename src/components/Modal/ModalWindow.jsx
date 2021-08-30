import React from "react";
import {
  CloseButton,
  ModalStyle,
  OverlayStyle,
  ProductOrder,
  BuyButton,
  CategoryModal,
  NameModal,
  PriceModal,
  BucksModal,
  InputField,
  OrderButton,
  ErrorMessage,
} from "./modalWindow.style";
import Popup from "reactjs-popup";

import useForm from "../../useForm";
import validate from "../../validate";

const ModalWindow = ({ prodList, text }) => {
  const { values, errors, handleChange, handleSubmit, focusAfterError } =
    useForm(submitData, validate);

  function submitData() {
    console.log(`${values.name} - ${values.phone}`);
  }

  return (
    <Popup trigger={<BuyButton>{text}</BuyButton>} modal lockScroll>
      {(close) => (
        <OverlayStyle>
          <ModalStyle>
            <CloseButton className="close" onClick={close}>
              &times;
            </CloseButton>
            <ProductOrder>
              <CategoryModal>{prodList.category}</CategoryModal>
              <NameModal>{prodList.name}</NameModal>
              <PriceModal>
                <BucksModal>$</BucksModal>
                {prodList.price}
              </PriceModal>

              <InputField
                autoComplete="off"
                style={{ borderColor: errors.name ? "#ff0000" : "" }}
                type="text"
                name="name"
                placeholder="Name"
                value={values.name || ""}
                required
                onChange={handleChange}
                onFocus={focusAfterError}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

              <InputField
                autoComplete="off"
                style={{ borderColor: errors.phone ? "#ff0000" : "" }}
                type="text"
                name="phone"
                placeholder="Number"
                value={values.phone || ""}
                required
                onChange={handleChange}
                onFocus={focusAfterError}
              />
              {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

              <OrderButton onClick={handleSubmit}>Order</OrderButton>
            </ProductOrder>
          </ModalStyle>
          );
        </OverlayStyle>
      )}
    </Popup>
  );
};

export default ModalWindow;
