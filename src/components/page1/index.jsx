import React from "react";

import img1 from "../../assets/imgs/img1.png";
import img2 from "../../assets/imgs/img2.png";
import img3 from "../../assets/imgs/img3.png";
import img4 from "../../assets/imgs/img4.png";
import stars from "../../assets/imgs/stars.png";
import colors from "../../assets/imgs/colors.png";

// style components

import {
  Container,
  Wrapper,
  ImgFlex,
  Right,
  Rating,
  Info,
  Price,
  PriceRange,
  ExactPrice,
  ProductDetails,
  Button,
  Select,
  ColorSelect,
} from "../page1/style.js";

const Page1 = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <div>
            <img src={img1} alt="" />
            <ImgFlex>
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </ImgFlex>
          </div>

          <Right>
            <h1>Men's Regular T-shirt</h1>
            <Rating>
              <img style={{ width: "100px" }} src={stars} alt="" />
              <p>5.00 Rating</p>
              <p>In Stock</p>
            </Rating>
            <Info>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              erat quam. Vestibulum aliquam nibh dui, et aliquet nibh euismod
              quis.
            </Info>

            <Price>
              <PriceRange>
                <h3>Quantity</h3>
                <div>
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
              </PriceRange>

              <ExactPrice>
                <h3>$29.00</h3>
                <p>+12% VAT Added</p>
              </ExactPrice>
            </Price>
            <Button>Add to Cart</Button>

            <ProductDetails>
              <h1>Product Details</h1>

              <div className="detail">
                <p>Size</p>
                <p>Small, Medium, Large</p>
              </div>
              <div className="detail">
                <p>Color</p>
                <p>White, Black, Gray</p>
              </div>
              <div className="detail">
                <p>Brand</p>
                <p>Shirt Flex</p>
              </div>
            </ProductDetails>

            <Select>
              <h4>Select Size</h4>
              <div className="btns">
                <Button color="not">Small</Button>
                <Button>Medium</Button>
                <Button color="not">Large</Button>
              </div>
            </Select>

            <ColorSelect>
              <h4>Select Color</h4>
              <img style={{width:"50%"}} src={colors} alt="" />
            </ColorSelect>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Page1;
