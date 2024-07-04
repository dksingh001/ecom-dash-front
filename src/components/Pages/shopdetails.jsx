import React from "react";
import pic from "../Assest/img/new.png";

const shopdetails = () => {
  return (
    <>
      <div id="product">
        <div className="productde">
          <div className="productcontainer">
            <div className="productmultipleimg">
                <div className="imgcontainer">
                    <img src={pic} alt="" />
                </div>
                <div className="imgcontainer">
                    <img src={pic} alt="" />
                </div>
                <div className="imgcontainer">
                    <img src={pic} alt="" />
                </div>
            </div>
            <div className="productImg">
              <div className="ptimg"><img src={pic} alt="" /></div>
              <div className="prtbton">
                <button className="prtatc">ADD TO CARD</button>
                <button className="prtbn">BUY NOW</button>
              </div>
            </div>
            <div className="productright">
              <div className="productname">name</div>
              <div className="producttitle">title</div>
              <div className="productprice">
                <p>Special Price</p>
                <div class="product-details-price">
                  <p className="price">₹2,399</p>
                  <p id="discount">₹720</p>
                  <p className="percentage">60% off</p>
                </div>
              </div>
              <div className="productrating">
                ratting 
              </div>
              <div className="productsize">
                size
              </div>
              <div className="productOffers">
                Available offers
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default shopdetails;