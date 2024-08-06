import React from "react";
import pic from "../Assest/img/animation.png";


const Order = () => {
  return (
    <>
      <div className="olrpp">
        <div className="olrspp">
          <div className="olrlflr">
            <div className="olrLftxt">
              <h1 id="fill"> Filters </h1>
            </div>
            <div className="olrLodrst">
              <div className="olrLOStxt">
                <h3 id="odr"> ORDER STATUS </h3>
              </div>
              <div className="olrLCI">
                <div className="olrLI">
                  <input type="checkbox" name="status" value="on-the-way" />
                </div>
                <div className="olrLItxt">
                  <p id="ost"> On the way </p>
                </div>
              </div>
              <div className="olrLCI">
                <div className="olrLI">
                  <input type="checkbox" name="status" value="delivered" />
                </div>
                <div className="olrLItxt">
                  <p id="ost"> Delivered </p>
                </div>
              </div>
              <div className="olrLCI">
                <div className="olrLI">
                  <input type="checkbox" name="status" value="cancelled" />
                </div>
                <div className="olrLItxt">
                  <p id="ost"> Cancelled </p>
                </div>
              </div>
              <div className="olrLCI">
                <div className="olrLI">
                  <input type="checkbox" name="status" value="returned" />
                </div>
                <div className="olrLItxt">
                  <p id="ost"> Returned </p>
                </div>
              </div>
            </div>
            <div className="olrLodrT">
              <div className="olrLOTtxt">
                <h3 id="ord"> ORDER TIME </h3>
              </div>
              <div className="olrLCI">
                <div className="olrLI">
                  <input type="checkbox" name="time" value="last-30-days" />
                </div>
                <div className="olrLItxt">
                  <p id="ost"> Last 30 days </p>
                </div>
              </div>
              <div className="olrLCI">
                <div className="olrLI">
                  <input type="checkbox" name="time" value="2024" />
                </div>
                <div className="olrLItxt">
                  <p id="ost"> 2024 </p>
                </div>
              </div>
              <div className="olrLCI">
                <div className="olrLI">
                  <input type="checkbox" name="time" value="2023" />
                </div>
                <div className="olrLItxt">
                  <p id="ost"> 2023 </p>
                </div>
              </div>
              <div className="olrLCI">
                <div className="olrLI">
                  <input type="checkbox" name="time" value="2022" />
                </div>
                <div className="olrLItxt">
                  <p id="ost"> 2022 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="olrRsl">
            <div className="olrRss">
              <div className="olrRssi">
                <input
                  type="text"
                  placeholder="Search your orders here"
                  class="search-input"
                />
              </div>
              <div className="olrRsB">
                <button class="search-button">Search Orders</button>
              </div>
            </div>
            <div className="olsRslit">
              <div className="olsRslit1t">
                <div className="olsRsIg">
                  <img src={pic} alt="" style={{width:"100px"}}/>
                </div>
                <div className="olsRstxt">
                  <h2>boAt wave Elite with 1.69" HD Display, 7....</h2>
                  <div className="olsRsCS">
                    <div className="olsRsC">
                      Color: Active Black
                    </div>
                    <div className="olsRsS">
                      Size: 1.36
                    </div>
                  </div>
                </div>
              </div>
              <div className="olsRslit2d">
                $ 2222
              </div>
              <div className="olsRs3rd">
                <h3>Delivered on Feb 12</h3>
                <p>Your Item has been delivered</p>
                <h4>Rate & Review Product</h4>
              </div>
            </div>
            <div className="olsRslit">
              <div className="olsRslit1t">
                <div className="olsRsIg">
                  <img src={pic} alt="" style={{width:"100px"}}/>
                </div>
                <div className="olsRstxt">
                  <h2>boAt wave Elite with 1.69" HD Display, 7....</h2>
                  <div className="olsRsCS">
                    <div className="olsRsC">
                      Color: Active Black
                    </div>
                    <div className="olsRsS">
                      Size: 1.36
                    </div>
                  </div>
                </div>
              </div>
              <div className="olsRslit2d">
                $ 2222
              </div>
              <div className="olsRs3rd">
                <h3>Cancelled on Feb 12 2024</h3>
                <p>You requested a cancelled beacause you've purchased the ptoduct</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
