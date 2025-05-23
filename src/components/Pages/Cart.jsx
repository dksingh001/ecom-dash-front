import React, { useEffect, useState } from "react";
import pic from "../../components/Assest/img/animation.png";
import { useMain } from "../../hook/useMain";

const Modal = ({ message, message1, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

const Cart = ( ) => {
  const { fetchallcartItem, deletecartItem } = useMain();
  const [cart, setCart] = useState([]);
  // const [delete, SetDelete] = useState()
  const [message, setMessage] = useState("");
  const [count, setCount] = useState([]);
  const [totalprice, SetTotalprice]  = useState(0)
  // console.log(totalprice)
  // console.log(count)

  useEffect(() => {
    const FetchcartItem = async () => {
      try {
        const data = await fetchallcartItem();
        if (data?.success && Array.isArray(data.cartitems)) {
          // Add default count if missing or invalid
          const processedCart = data.cartitems.map((item) => ({
            ...item,
        // count: item.count || 1, // Default count to 1 if it's missing
            count: isNaN(item.count) ? 1 : item.count, // Default count to 1 if it's missing or invalid
          }));
          setCart(processedCart);
          // console.log("Processed Cart Items:", processedCart);
        } else {
          console.error("Failed to fetch cart items:", data?.message);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
  
    FetchcartItem();
  }, [fetchallcartItem]);
  

  // useEffect(() => {
  //   const FetchcartItem = async () => {
  //     try {
  //       const data = await fetchallcartItem();
  //       if (data && data.success) {
  //         // setCart(data.cartitems)
  //         // setCart((predata) =>[...predata, data.cartitems])
  //         if (Array.isArray(data.cartitems)) {
  //           setCart(data.cartitems);
  //         } else {
  //           console.error("Fetch data is not an array", data.cartitems);
  //         }
  //       } else {
  //         console.error("Failed to fetch cart Items", data?.message);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching cart Items", error);
  //     }
  //   };
  //   FetchcartItem();
  // }, [fetchallcartItem]);

  useEffect(()=>{
   // Calculate total price whenever cartItems changes 
   const total = cart.reduce((acc, item)=> acc + item.count * item.price, 0)
   SetTotalprice(total);

  },[cart])


  // console.log(cart);
  const Increasebtn = async (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].count = (updatedCart[index].count || 1) + 1; // Increment count
      // updatedCart[index].count += 1;
      console.log(updatedCart)
      return updatedCart;
    });
  };

  const decresebtn = async (index) => {
    // setCount((preitem) => Math.max(preitem - 1, 1));
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (updatedCart[index].count > 1) {
        updatedCart[index].count -= 1;
      }
      return updatedCart;
    });
  };


  const removeBtn = async (itemid) => {
    try {
      console.log(itemid);
      const response = await deletecartItem(itemid);
      if (response && response.success) {
        setCart((preCart) => preCart.filter((item) => item.id !== itemid));
        setMessage(response.message);

        setTimeout(() => {
          setMessage("");
        }, );
      } else {
        console.error("Failed to delete item", response?.message);
      }
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  return (
    <>
      <div id="cart-pages">
        <div className="cart-2nd">
          <div className="left-caintainer">
            {cart &&
              cart.map((item, index) => (
                <>
                  <div className="product-details" key={item || item._id}>
                    <div class="cart-item">
                      <div className="ctms">
                        {message && (
                          <Modal
                            message={message}
                            onClose={() => setMessage("")}
                          />
                        )}
                        <div className="item-details-container">
                          <div className="item-details-img">
                            <img
                              src={item.image}
                              alt="LEBAS Women Kurta Pant Set"
                            />
                          </div>
                          <div className="item-details-details">
                            <div className="item-details-title">
                              <h3 id="h3">{item.title}</h3>
                            </div>
                            <div className="item-details-size">
                              <p id="ss">Size: </p>
                              <p id="ssl">{item.size}</p>
                            </div>
                            <div class="item-details-price">
                              <p className="price">₹ {item.price}</p>
                              <p id="discount">₹720</p>
                              <p className="percentage">60% off</p>
                            </div>
                          </div>
                        </div>
                        <div className="item-details-dcrinrsa-re">
                          <div className="decinr">
                            <button className="nega" onClick={()=>decresebtn(index)}>
                              -
                            </button>
                            <button className="count">{item.count}</button>
                            <button className="pule" onClick={()=>Increasebtn(index)}>
                              +
                            </button>
                          </div>
                          <div className="saflete">
                            <button className="savelater">
                              SAVE FOR LATER
                            </button>
                          </div>
                          <div className="remo">
                            <button
                              className="remove"
                              onClick={() => removeBtn(item.id || item._id)}
                            >
                              REMOVE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}

            <div className="cart-button">
              <button type="button">PLACE ORDER</button>
            </div>
          </div>
          <div className="right-caintainer">
            <div class="price-details">
              <h2>PRICE DETAILS</h2>
              <div class="detail">
                <span>Price</span>
                <span>₹ { totalprice } </span>
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
