import React from "react";
import pic from "../Assest/img/animation.png";

const Profile = () => {
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
              <div className="psinpp">
                <div className="pslin">
                  <div className="pslinhg">
                    <h2> Personal Information </h2>
                  </div>
                  <div className="pslihgdit">
                    <button> Edit </button>
                  </div>
                </div>
                <div className="pslinipt">
                  <div className="pslinitfirn">
                    <input
                      type="text"
                      id="first-name"
                      value="Dinesh"
                      readOnly
                    />
                  </div>
                  <div className="pslinitlirn">
                    <input type="text" id="last-name" value="Singh" readOnly />
                  </div>
                </div>
              </div>
              <div className="psligdr">
                <label htmlFor=""> Your Gender </label>
                <div className="psligj">
                <div className="psligm">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked
                      disabled
                    />{" "}
                    Male
                  </label>
                </div>
                <div className="psligf">
                  <label>
                    <input type="radio" name="gender" value="Female" disabled />{" "}
                    Female
                  </label>
                </div>
                </div>
              </div>
              <div className="psaddppp">
                <div className="psaddml">
                  <div className="psaddtxt">
                    <h2> Email Address </h2>
                  </div>
                  <div className="pslihgdit">
                    <button> Edit </button>
                  </div>
                </div>
                <div className="pslihgipt">
                  <input
                    type="email"
                    id="email"
                    value="dkadesh1999@gmail.com"
                    readOnly
                  />
                </div>
              </div>
              <div className="psamnppp">
                <div className="psmnml">
                  <div className="psmntxt">
                    <h2> Mobile Number </h2>
                  </div>
                  <div className="psmngdit">
                    <button> Edit </button>
                  </div>
                </div>
                <div className="pslimnipt">
                  <input
                    type="number"
                    id="number"
                    value="6200327585"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
