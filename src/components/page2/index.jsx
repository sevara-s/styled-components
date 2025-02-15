import React from "react";

import img5 from "../../assets/imgs/img5.jpg";
import img6 from "../../assets/imgs/img6.jpg";
import img7 from "../../assets/imgs/img7.jpg";
import img8 from "../../assets/imgs/img8.jpg";
import img9 from "../../assets/imgs/img9.jpg";
import img10 from "../../assets/imgs/img10.jpg";
import star from "../../assets/imgs/onestar.png";

import { Grid } from "./style";

const Page2 = () => {
  return (
    <>
      <Grid>
        {/* product1 */}
        <div>
          <img src={img5} alt="" />
          <div>
            <h3>Leather Court Shoes</h3>
            <div className="start">
              <p> 14 reviews</p>
              <img src={star} alt="" />
            </div>
            <h4>$39.00</h4>
          </div>
        </div>
        {/* product2 */}
        <div>
          <img src={img6} alt="" />
          <div>
            <h3>Leather Court Shoes</h3>
            <div className="start">
              <p> 14 reviews</p>
              <img src={star} alt="" />
            </div>
            <h4>$39.00</h4>
          </div>
        </div>
        {/* product3 */}
        <div>
          <img src={img7} alt="" />
          <div>
            <h3>Leather Court Shoes</h3>
            <div className="start">
              <p> 14 reviews</p>
              <img src={star} alt="" />
            </div>
            <h4>$39.00</h4>
          </div>
        </div>
        {/* product4 */}
        <div>
          <img src={img8} alt="" />
          <div>
            <h3>Leather Court Shoes</h3>
            <div className="start">
              <p> 14 reviews</p>
              <img src={star} alt="" />
            </div>
            <h4>$39.00</h4>
          </div>
        </div>
        {/* product5 */}
        <div>
          <img src={img9} alt="" />
          <div>
            <h3>Leather Court Shoes</h3>
            <div className="start">
              <p> 14 reviews</p>
              <img src={star} alt="" />
            </div>
            <h4>$39.00</h4>
          </div>
        </div>
        {/* product6 */}
        <div>
          <img src={img10} alt="" />
          <div>
            <h3>Leather Court Shoes</h3>
            <div className="start">
              <p> 14 reviews</p>
              <img src={star} alt="" />
            </div>
            <h4>$39.00</h4>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Page2;
