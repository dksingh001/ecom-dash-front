import React, { useEffect } from "react";
import Img from "../Assest/img/second.png";
import { useMain } from "../../hook/useMain";
import { Link } from "react-router-dom";

const Shop = () => {
  const { getproducts } = useMain();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getproducts();
        console.log("fetch products:", data.allproduct);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [getproducts]);

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
            <div className="product-outer">
              <div className="product">
                <div className="sub_product">
                  <Link to="/shopdetails">
                    <div className="product_img">
                      <img src={Img} alt="" />
                    </div>
                    <div className="product_name">
                      <h2>boAt Airdopes Supreme</h2>
                    </div>
                    <div className="product_title">
                      <h1>title</h1>
                    </div>
                    <div className="product_ratting">
                      <h1>ratting</h1>
                    </div>
                    <div className="product_price">
                      <div class="item-details-price">
                        <p className="price">₹2,399</p>
                        <p id="discount">₹720</p>
                        <p className="percentage">60% off</p>
                      </div>
                    </div>
                  </Link>
                  {/* <div className="product_buttom">
                  <button>Add to Cart</button>
                </div> */}
                </div>
                <div className="sub_product">
                  <div className="product_img">
                    <img src={Img} alt="" />
                  </div>
                  <div className="product_name">
                    <h2>boAt Airdopes Supreme</h2>
                  </div>
                  <div className="product_title">
                    <h1>title</h1>
                  </div>
                  <div className="product_ratting">
                    <h1>ratting</h1>
                  </div>
                  <div className="product_price">
                    <div class="item-details-price">
                      <p className="price">₹2,399</p>
                      <p id="discount">₹720</p>
                      <p className="percentage">60% off</p>
                    </div>
                  </div>
                  {/* <div className="product_buttom">
                  <button>Add to Cart</button>
                </div> */}
                </div>
                <div className="sub_product">
                  <div className="product_img">
                    <img src={Img} alt="" />
                  </div>
                  <div className="product_name">
                    <h2>boAt Airdopes Supreme</h2>
                  </div>
                  <div className="product_title">
                    <h1>title</h1>
                  </div>
                  <div className="product_ratting">
                    <h1>ratting</h1>
                  </div>
                  <div className="product_price">
                    <div class="item-details-price">
                      <p className="price">₹2,399</p>
                      <p id="discount">₹720</p>
                      <p className="percentage">60% off</p>
                    </div>
                  </div>
                  {/* <div className="product_buttom">
                  <button>Add to Cart</button>
                </div> */}
                </div>
                <div className="sub_product">
                  <div className="product_img">
                    <img src={Img} alt="" />
                  </div>
                  <div className="product_name">
                    <h2>boAt Airdopes Supreme</h2>
                  </div>
                  <div className="product_title">
                    <h1>title</h1>
                  </div>
                  <div className="product_ratting">
                    <h1>ratting</h1>
                  </div>
                  <div className="product_price">
                    <div class="item-details-price">
                      <p className="price">₹2,399</p>
                      <p id="discount">₹720</p>
                      <p className="percentage">60% off</p>
                    </div>
                  </div>
                  {/* <div className="product_buttom">
                  <button>Add to Cart</button>
                </div> */}
                </div>
                <div className="sub_product">
                  <div className="product_img">
                    <img src={Img} alt="" />
                  </div>
                  <div className="product_name">
                    <h2>boAt Airdopes Supreme</h2>
                  </div>
                  <div className="product_title">
                    <h1>title</h1>
                  </div>
                  <div className="product_ratting">
                    <h1>ratting</h1>
                  </div>
                  <div className="product_price">
                    <div class="item-details-price">
                      <p className="price">₹2,399</p>
                      <p id="discount">₹720</p>
                      <p className="percentage">60% off</p>
                    </div>
                  </div>
                  {/* <div className="product_buttom">
                  <button>Add to Cart</button>
                </div> */}
                </div>
                <div className="sub_product">
                  <div className="product_img">
                    <img src={Img} alt="" />
                  </div>
                  <div className="product_name">
                    <h2>boAt Airdopes Supreme</h2>
                  </div>
                  <div className="product_title">
                    <h1>title</h1>
                  </div>
                  <div className="product_ratting">
                    <h1>ratting</h1>
                  </div>
                  <div className="product_price">
                    <div class="item-details-price">
                      <p className="price">₹2,399</p>
                      <p id="discount">₹720</p>
                      <p className="percentage">60% off</p>
                    </div>
                  </div>
                  {/* <div className="product_buttom">
                  <button>Add to Cart</button>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
