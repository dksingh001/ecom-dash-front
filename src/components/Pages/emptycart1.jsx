import React from "react";
import pic1 from "../../components/Assest/img/cart.png"
import { Link } from "react-router-dom";


const emptycart = () => {
  return (
    <>
      <div className="cart-container">
        <div className="cart-content">
          <div className="image-placeholder">
            {/* Image/illustration placeholder */}
            <img src={pic1} alt="Coffee Illustration" />
          </div>
          <div>
            <div>
              <h1 className="h1">Your Cart is empty</h1>
            </div>
            <div>
              <p className="p">
                <Link href="#">Shop today’s deals</Link>
              </p>
            </div>
            <div className="buttons">
              <button className="sign-in"> Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default emptycart;
