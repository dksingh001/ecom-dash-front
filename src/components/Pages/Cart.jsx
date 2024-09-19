import React, { useEffect, useState } from "react";
import pic from "../../components/Assest/img/animation.png";
import {useMain} from "../../hook/useMain"

const Cart = () => {
  const {fetchallcartItem} = useMain();
  const [cart, setCart] = useState([])

  useEffect (()=>{
  const FetchcartItem = async() =>{
    try {
      const data = await fetchallcartItem();
      if (data  && data.success) {
        // setCart(data.cartitems)
        // setCart((predata) =>[...predata, data.cartitems])
        if (Array.isArray(data.cartitems)) {
          setCart(data.cartitems)
        
        } else {
          console.error("Fetch data is not an array", data.cartitems)
        }
      }else{
        console.error("Failed to fetch cart Items", data?.message)
      }
    } catch (error) {
      console.error("Error fetching cart Items", error)
    }

  }
  FetchcartItem()
  }, [fetchallcartItem])
  console.log(cart)

  return (
    <>
      <div id="cart-pages">
        <div className="cart-2nd">
          <div className="left-caintainer">
            <div className="product-details">
              <div class="cart-item">
                <div className="item-details-container">
                  <div className="item-details-img">
                    <img src={pic} alt="LEBAS Women Kurta Pant Set" />
                  </div>
                  <div className="item-details-details">
                  <div className="item-details-title">
                    <h3 id="h3">LEBAS Women Kurta Pant Set</h3>
                  </div>
                  <div className="item-details-size">
                    <p id="ss">Size: </p>
                    <p id="ssl">XL</p>
                  </div>
                  <div class="item-details-price">
                    <p className="price">₹2,399</p>
                    <p id="discount">₹720</p>
                    <p className="percentage">60% off</p>
                  </div>
                  </div>
                </div>
                <div className="item-details-dcrinrsa-re">
                  <div className="decinr">
                    <button className="nega">-</button>
                    <button className="count">1</button>
                    <button className="pule">+</button>
                  </div>
                  <div className="saflete">
                    <button className="savelater">SAVE FOR LATER</button>
                  </div>
                  <div className="remo">
                    <button className="remove">REMOVE</button>
                  </div>
                </div>
              </div>
              <div class="cart-item">
                <div className="item-details-container">
                  <div className="item-details-img">
                    <img src={pic} alt="LEBAS Women Kurta Pant Set" />
                  </div>
                  <div className="item-details-details">
                  <div className="item-details-title">
                    <h3 id="h3">LEBAS Women Kurta Pant Set</h3>
                  </div>
                  <div className="item-details-size">
                    <p id="ss">Size: </p>
                    <p id="ssl">XL</p>
                  </div>
                  <div class="item-details-price">
                    <p className="price">₹2,399</p>
                    <p id="discount">₹720</p>
                    <p className="percentage">60% off</p>
                  </div>
                  </div>
                </div>
                <div className="item-details-dcrinrsa-re">
                  <div className="decinr">
                    <button className="nega">-</button>
                    <button className="count">1</button>
                    <button className="pule">+</button>
                  </div>
                  <div className="saflete">
                    <button className="savelater">SAVE FOR LATER</button>
                  </div>
                  <div className="remo">
                    <button className="remove">REMOVE</button>
                  </div>
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
