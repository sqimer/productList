import styled from "styled-components";

export const BuyButton = styled.button`
  font-family: "Roboto-Regular";
  font-size: 1.5em;
  color: #4bcfa0;
  line-height: 1.75em;
  letter-spacing: -0.02em;
  background-color: #fff;
  padding: 16px 48px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #50daa8;
    color: #fff;
    border-color: transparent;
  }

  @media (max-width: 1340px) {
    padding: 10px 30px;
  }

  @media (max-width: 1100px) {
    font-size: 1em;
    line-height: 1em;
    height: 60px;
  }
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;

  background-color: #fff;
  border-radius: 24px;

  @media (max-width: 425px) {
    padding: 15px;
  }
`;

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  overflow-y: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #f2f2f2;
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 1.5em;
  cursor: pointer;
  outline: none;
`;

export const ProductOrder = styled.div`
  text-align: center;
`;

export const CategoryModal = styled.p`
  font-size: 1em;
  color: #000;
  opacity: 0.5;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: .875em;
  }
`;

export const NameModal = styled.p`
  font-size: 2.5em;
  color: #000;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  margin: 8px 0 16px 0;

  @media (max-width: 425px) {
    font-size: 2em;
  }
`;

export const PriceModal = styled.p`
  font-size: 3.75em;
  color: #000;
  line-height: 72px;
  letter-spacing: -0.02em;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 425px) {
    font-size: 2.25em;
  }
`;

export const BucksModal = styled.span`
  font-size: 0.5em;
  color: #000;
  line-height: 35px;
  letter-spacing: -0.02em;
  margin-right: 4px;
  margin-top: 12px;
`;

export const InputField = styled.input`
  display: block;
  margin-top: 20px;
  min-width: 288px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  outline: none;
  padding: 16px;

  &:focus {
    border-color: #4bcfa0;
  }

  @media (max-width: 425px) {
    min-width: 250px;
  }
`;

export const OrderButton = styled.button`
  min-width: 288px;
  margin-top: 30px;
  font-family: "Roboto-Regular";
  font-size: 1em;
  color: #4bcfa0;
  line-height: 1.5em;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background-color: #fff;
  padding: 12px 103px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #50daa8;
    color: #fff;
    border-color: transparent;
  }

  @media (max-width: 425px) {
    min-width: 250px;
    padding: 12px 97px;
    line-height: 1em;
  }
`;

export const ErrorMessage = styled.p`
  text-align: left;
  font-size: 0.75em;
  color: #e43f3f;
  line-height: 16px;
  letter-spacing: -0.02em;
  margin-top: 5px;
  margin-left: 5px;
`;
