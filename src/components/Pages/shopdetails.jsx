import React, { useState, useEffect } from "react";
import pic from "../Assest/img/new.png";
import { useParams } from "react-router-dom";
import { useMain } from "../../hook/useMain";

const Shopdetails = () => {
  const { id } = useParams();
  const { getProductById } = useMain(); // Assume this hook fetches a product by ID
  const [product, setProduct] = useState([]);
 
  console.log(id)
  console.log(product);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data.allproduct);
        console.log("fetch product:", data.allproduct);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id, getProductById]);

  if (!product) {
    return <div>Loading...</div>;
  }

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
              <div className="ptimg">
                <img src={product.image} alt="" />
              </div>
              <div className="prtbton">
                <button className="prtatc">ADD TO CARD</button>
                <button className="prtbn">BUY NOW</button>
              </div>
            </div>
            <div className="productright">
              <div className="productname">{product.name}</div>
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
