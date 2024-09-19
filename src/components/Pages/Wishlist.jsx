import {useState, useEffect} from "react";
import pic from "../Assest/img/animation.png";
import { useMain } from "../../hook/useMain";

const Wishlist = () => {
  const { fetchallwishlist } = useMain();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const data = await fetchallwishlist();

        if (data) {
          if (Array.isArray(data.wishlist)) {
            setWishlist(data.wishlist);
            console.log(data.wishlist);
          } else {
            console.error("Fetch data is not an array", data.wishlist);
          }
        } else {
          console.error("Failed to fetch wishlist item", data?.message);
        }
      } catch (error) {
        console.error("Failed to fetch wishlist item", error);
      }
    };

    fetchWishlist();
  }, [fetchallwishlist]);

  console.log(wishlist);

  return (
    <>
      <div className="whctainr">
        <div className="wi_scoter">
          <div className="lftsde">
            <div className="lft_pofle">
              <div className="lftpfleig">
                <img src={pic} alt="" />
              </div>
              <div className="lft_txt">
                <p id="ho">Hello,</p>
                <span id="pfn">Dinesh singh</span>
              </div>
            </div>
            <div className="lftmordr">
              <div className="lftordrion">
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
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                  />
                </svg>
              </div>
              <div className="lftordrtxt">MY ORDER</div>
            </div>
            <div className="lftacontsting">
              <div className="lftactcont">
                <div className="lftordeicon">
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
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
                <div className="lftconttxt">ACCOUNT SETTING</div>
              </div>
              <div className="lftpoifo">Profile Information</div>
              <div className="lftpoads">Manage Addresses</div>
              <div className="lftpopai">PAN Card infoemations</div>
            </div>
            <div className="lftpymt">
              <div className="lftcont">
                <div className="lftpymticn">
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
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </div>
                <div className="lftpymttxt">PAYMENTS</div>
              </div>
              <div className="lftgtcd">Gift Cards</div>
              <div className="lftspi">Saved UPI</div>
              <div className="lftscds">Saved Cards</div>
            </div>
            <div className="lftstff">
              <div className="lftsffcont">
                <div className="lftsfficn">
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
                      d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                    />
                  </svg>
                </div>
                <div className="lftsffttxt">MY STUFF</div>
              </div>
              <div className="lftsffmtcopn">My Coupons</div>
              <div className="lftsffnti">All Notifications</div>
              <div className="lftsffrera">My Review & Ratings</div>
              <div className="lftsffwit">My wishlist</div>
            </div>
            <div className="lftlgot">
              <div className="lftlogot">
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
                    d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                  />
                </svg>
              </div>
              <div className="lftlogt">LOGOUT</div>
            </div>
          </div>
          <div className="rghtsde">
            <div className="rgtsbc">
              <div className="rgth">
                <h1 id="rgh">My Wishlist ( 0 )</h1>
              </div>
              <div className="rgtpc">
                <div className="rgctp">
                <div className="rgig" style={{ width: "100px"}} >
                  <img src={pic} alt="" />
                </div>
                <div className="rgdt">
                  <div className="rgsbt">
                    <h3>Striped Bollywood Cotton Silk Saree (Red)</h3>
                  </div>
                  <div className="rgsrt">ratings</div>
                  <div className="rgspiz">
                    <p className="price">₹ 200</p>
                    <p id="discount">₹720</p>
                    <p className="percentage">60% off</p>
                  </div>
                </div>
                </div>
                <div className="rgdt">
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
