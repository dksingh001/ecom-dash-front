import React from "react";
import Img from "../Assest/img/new1.png";

const shop = () => {
  return (
    <>
      <div id="main">
        <div className="main-section">
          <div className="second-section">
            <div className="first-section">
              <div className="all">
                <h2> All Products</h2>
              </div>
              <div className="filter">
                <select name="Default sorting" id="">
                  <option value="">Default sorting</option>
                  <option value="">high to low</option>
                  <option value="">low to high</option>
                  <option value=""> Sort by top Brand </option>
                </select>
              </div>
            </div>
            <div className="product">
              <div className="sub_product">
                <div className="product_img">
                  <img src={Img} alt="" />
                </div>
                <div className="product_name">
                   <h2>boAt Airdopes Supreme</h2>
                </div>
                {/* <div className="product_title">
                  <h1>title</h1>
                </div> */}
                <div className="product_price">
                  Price: ₹1,499 <span class="discount">₹5,999</span>
                </div>
                <div className="product_buttom">
                 <button>Add to Cart</button>
                </div>
              </div>
              <div className="sub_product">
                <div className="product_img">
                  <img src={Img} alt="" />
                </div>
                <div className="product_name">
                   <h2>boAt Airdopes Supreme</h2>
                </div>
                {/* <div className="product_title">
                  <h1>title</h1>
                </div> */}
                <div className="product_price">
                  Price: ₹1,499 <span class="discount">₹5,999</span>
                </div>
                <div className="product_buttom">
                 <button>Add to Cart</button>
                </div>
              </div>
              <div className="sub_product">
                <div className="product_img">
                  <img src={Img} alt="" />
                </div>
                <div className="product_name">
                   <h2>boAt Airdopes Supreme</h2>
                </div>
                {/* <div className="product_title">
                  <h1>title</h1>
                </div> */}
                <div className="product_price">
                  Price: ₹1,499 <span class="discount">₹5,999</span>
                </div>
                <div className="product_buttom">
                 <button>Add to Cart</button>
                </div>
              </div>
              <div className="sub_product">
                <div className="product_img">
                  <img src={Img} alt="" />
                </div>
                <div className="product_name">
                   <h2>boAt Airdopes Supreme</h2>
                </div>
                {/* <div className="product_title">
                  <h1>title</h1>
                </div> */}
                <div className="product_price">
                  Price: ₹1,499 <span class="discount">₹5,999</span>
                </div>
                <div className="product_buttom">
                 <button>Add to Cart</button>
                </div>
              </div>
              <div className="sub_product">
                <div className="product_img">
                  <img src={Img} alt="" />
                </div>
                <div className="product_name">
                   <h2>boAt Airdopes Supreme</h2>
                </div>
                {/* <div className="product_title">
                  <h1>title</h1>
                </div> */}
                <div className="product_price">
                  Price: ₹1,499 <span class="discount">₹5,999</span>
                </div>
                <div className="product_buttom">
                 <button>Add to Cart</button>
                </div>
              </div>
              <div className="sub_product">
                <div className="product_img">
                  <img src={Img} alt="" />
                </div>
                <div className="product_name">
                   <h2>boAt Airdopes Supreme</h2>
                </div>
                {/* <div className="product_title">
                  <h1>title</h1>
                </div> */}
                <div className="product_price">
                  Price: ₹1,499 <span class="discount">₹5,999</span>
                </div>
                <div className="product_buttom">
                 <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default shop;
