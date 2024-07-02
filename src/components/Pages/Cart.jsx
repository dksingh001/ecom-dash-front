import React from "react";
import pic from "../../components/Assest/img/fifth.png"

const Cart = () => {
  return (
    <>
      <div id="cart-pages">
        <div className="cart-2nd">
          <div className="left-caintainer">
            <div className="product-details">
              <div class="cart-item">
                <img
                  src={pic}
                  alt="LEBAS Women Kurta Pant Set"
                />
                <div class="item-details">
                  <h3 id="h3">LEBAS Women Kurta Pant Set</h3>
                  <p class="price">₹2,399</p>
                  <p class="discount">₹720 off</p>
                </div>
              </div>
              <div class="cart-item">
                <img
                   src={pic}
                  alt="PUMA Comfort Slippers"
                />
                <div class="item-details">
                  <h3>PUMA Comfort Slippers</h3>
                  <p class="price">₹1,565</p>
                  <p class="discount">₹470 off</p>
                </div>
              </div>
              <div className="cart-button">
                <button type="button">PLACE ORDER</button>
              </div>
            </div>
          </div>
          <div className="right-caintainer">
            <div class="price-details">
              <h2>PRICE DETAILS</h2>
              <div class="detail">
                <span>Price (2 items)</span>
                <span>₹6,898</span>
              </div>
              <div class="detail">
                <span>Discount</span>
                <span>- ₹4,428</span>
              </div>
              <div class="detail">
                <span>Coupons for you</span>
                <span>- ₹234</span>
              </div>
              <div class="detail">
                <span>Delivery Charges</span>
                <span>₹80 Free</span>
              </div>
              <div class="total">
                <span>Total Amount</span>
                <span>₹2,236</span>
              </div>
              <p>You will save ₹4,662 on this order</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
