import React, { useState, useEffect } from "react";
import pic from "../Assest/img/new.png";
import { useParams } from "react-router-dom";
import { useMain } from "../../hook/useMain";

const Shopdetails = () => {
  const { id } = useParams();
  const { getProductById } = useMain(); // Assume this hook fetches a product by ID
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        if (data.success) {
          setProduct(data.data);
        }
        // console.log("fetch product:", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id, getProductById]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // console.log(product.price)

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
              <div className="wishlistican">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bfc9ca"
                  viewBox="0 0 24 24"
                  stroke-width="1.0"
                  stroke="#bfc9ca"
                  class="size-6"
                  width="25"
                  height="25"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <div className="ptimg">
                <img src={product.image || pic} alt="" />
              </div>
              <div className="prtbton">
                <button className="prtatc">ADD TO CARD</button>
                <button className="prtbn">BUY NOW</button>
              </div>
            </div>
            <div className="productright">
              <div className="productname">{product.name} </div>
              <div className="producttitle">{product.title}</div>
              <div className="productprice">
                <p>Special Price</p>
                <div className="product-details-price">
                  <p className="price">₹ {product.price}</p>
                  <p id="discount">₹720</p>
                  <p className="percentage">60% off</p>
                </div>
              </div>
              <div className="productrating">ratting</div>
              <div className="productsize">size</div>
              <div className="productOffers">Available offers</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopdetails;
