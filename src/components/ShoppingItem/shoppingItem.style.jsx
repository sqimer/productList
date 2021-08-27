import styled from "styled-components";

export const Wrapper = styled.div`
  width: 28%;
  background-color: #fff;
  border-radius: 24px;
  padding: 32px;
  margin: 15px;
  box-shadow: 24px 24px 40px rgba(75, 207, 160, 0.08);

  @media (max-width: 1100px) {
    padding: 20px;
  }

  @media (max-width: 860px) {
    width: 45%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Category = styled.p`
  font-size: 1em;
  color: #000;
  opacity: 0.5;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media (max-width: 1100px) {
    font-size: .75em;
  }
`;

export const Name = styled.p`
  font-size: 2.5em;
  color: #000;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  margin: 8px 0 40px 0;

  @media (max-width: 1340px) {
    font-size: 2em;
  }

  @media (max-width: 1100px) {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
`;

export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  font-size: 3.75em;
  color: #000;
  line-height: 72px;
  letter-spacing: -0.02em;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1340px) {
    font-size: 3em;
  }

  @media (max-width: 1100px) {
    font-size: 2em;
  }
`;

export const Bucks = styled.span`
  font-size: 0.5em;
  color: #000;
  line-height: 35px;
  letter-spacing: -0.02em;
  margin-right: 4px;
  margin-top: 12px;
`;
