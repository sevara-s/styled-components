import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 40px;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const ImgFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
`;

export const Right = styled.div`
  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 125%;
    color: #212b36;
  }
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #212b36;
  }
`;
export const Info = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #637381;
  margin-top: 40px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const PriceRange = styled.div`
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #000;
  }
  div {
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    width: 114px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
export const ExactPrice = styled.div`
  h3 {
    font-weight: 700;
    font-size: 28px;
    line-height: 125%;
    color: #000;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: right;
    color: #637381;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 12px 15px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  background: ${(props) => (props.color === "not" ? "#fff" : "#a9358d")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${(props) => (props.color === "not" ? "#212b36" : "#fff")};
  border: ${(props) => (props.color == "not" ? "1px solid #e7e7e7" : "none")};
  transition: 0.9s;
  &:hover {
    transform: scale(0.9);
  }
`;
export const ProductDetails = styled.div`
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: #212b36;
  }
  .detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #212b36;
    }
  }
`;
export const Select = styled.div`
  margin-top: 20px;
  h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: #212b36;
  }
  .btns {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

export const ColorSelect = styled.div`
  margin-top: 30px;
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    color: #212b36;
  }
`;
