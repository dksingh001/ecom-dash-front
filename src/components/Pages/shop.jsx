import React, { useEffect, useState } from "react";
import Img from "../Assest/img/second.png";
import { useMain } from "../../hook/useMain";
import { Link } from "react-router-dom";

const Shop = () => {
  const { getproducts } = useMain();
  const [products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getproducts();
        setProducts(data.allproduct);
        // console.log("fetch products:", data.allproduct);
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
                {products &&
                  products.map((item) => (
                    <div className="sub_product" key={item._id}>
                      <Link to={`/shopdetails/${item._id}`}>
                        <div className="wishlistican">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#bfc9ca"
                            viewBox="0 0 24 24"
                            stroke-width="1.0"
                            stroke="#bfc9ca"
                            class="size-6"
                            width="25" height="25"
                          >
                            
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                        </div>
                        <div className="product_img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="product_name">
                          <h2>{item.name}</h2>
                        </div>
                        <div className="product_title">
                          <h1>{item.title}</h1>
                        </div>
                        <div className="product_ratting">
                          <h1>{item.ratings}</h1>
                        </div>
                        <div className="product_price">
                          <div class="item-details-price">
                            <p className="price">₹ {item.price}</p>
                            <p id="discount">₹720</p>
                            <p className="percentage">60% off</p>
                          </div>
                        </div>
                      </Link>
                      {/* <div className="product_buttom">
                      <button>Add to Cart</button>
                      </div> */}
                    </div>
                  ))}

                {/* <div className="sub_product">
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
                  <div className="product_buttom">
                  <button>Add to Cart</button>
                </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
