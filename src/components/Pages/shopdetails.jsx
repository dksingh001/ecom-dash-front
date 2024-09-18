import React, { useState, useEffect } from "react";
import pic from "../Assest/img/new.png";
import { useParams } from "react-router-dom";
import { useMain } from "../../hook/useMain";
import rightlogo from "../../components/Assest/img/right arrow.jpg";

const Shopdetails = () => {
  const { id } = useParams();
  const { getProductById, addtocart, addtowishlist } = useMain(); // Assume this hook fetches a product by ID
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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

  const AddtoCart = async (productId) => {
    try {
      const response = await addtocart(id, productId); // Assuming `addtocart` is a function from your `useMain` hook that takes the product ID
      //   console.log("Product ID:", productId); // Ensure this logs the expected productId
      //  console.log(id)
      if (response && response.success) {
        setCart((predata) => [...predata, response.data]);
        console.log("Product added to cart successfully");
        // You can trigger a state update or navigate to the cart page here if needed
      } else {
        console.log("Failed to add product to cart");
      }
    } catch (error) {
      console.log("Error adding to product to cart", error);
    }
  };
  // console.log(cart)
  const BuyNow = async () => {};

  const Wishlist = async (productId) => {
    try {
      const response = await addtowishlist(id, productId);
      if (response && response.success) {
        setWishlist((predata) => [...predata, response.data]);
        console.log("Product added to to wishlist successfully");
      } else {
        console.log("Failed to add  product to wishlist");
      }
    } catch (error) {
      console.log("Error adding to product to wishlist");
    }
  };

  return (
    <>
      <div id="product">
        <div className="productde">
          <div className="productcontainer" key={product.id}>
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
              <div className="wishlistican" onClick={() => Wishlist(id)}>
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
                <button className="prtatc" onClick={() => AddtoCart(id)}>
                  ADD TO CARD
                </button>
                <button className="prtbn" onClick={() => BuyNow(id)}>
                  BUY NOW
                </button>
              </div>
            </div>
            <div className="productright">
              <div className="productpath">
                Home <img src={rightlogo} id="pig" /> Shop{" "}
                <img src={rightlogo} id="pig" /> shopdetails
              </div>
              <div className="productname">{product.name} </div>
              <div className="producttitle">{product.title}</div>
              <div className="productprice">
                <p id="sps">Special Price</p>
                <div className="product-details-price">
                  <p className="pricess">₹ {product.price}</p>
                  <p id="discount">₹ {product.price} </p>
                  <p className="percentage">60% off</p>
                </div>
              </div>
              <div className="productrating">
                <div className="ptrtg">{product.ratings}</div>
                <div className="ptrtgi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </div>
              </div>
              {product.size ? (
                <>
                  <div className="productsize">
                    <div className="pdth">Size</div>
                    <div className="pdts">{product.size}</div>
                  </div>
                </>
              ) : (
                <> </>
              )}
              <div className="productOffers">Available offers</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopdetails;
