import React from "react";
import { Link } from "react-router-dom";


const signup = () => {
  return (
    <>
      <div id="form-container">
        <div className="container">
          <div className="sub-container">
            <h2>Signup Form</h2>
            <form action="">
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="name">Name <span className="star">*</span></label>
                  </div>
                  <div>
                    <input type="text" id="name" name="name" required />
                  </div>
                </div>
              </div>
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="email">Name <span className="star">*</span></label>
                  </div>
                  <div>
                    <input type="email" id="email" name="email" required />
                  </div>
                </div>
              </div>
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="phone">Phone <span className="star">*</span></label>
                  </div>
                  <div>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                </div>
              </div>
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="set_password">Set password <span className="star">*</span></label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="set_password"
                      name="set_password"
                      required
                    />
                  </div>
                </div>
              </div>
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="conform_password">Set password <span className="star">*</span></label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="conform_password"
                      name="conform_password"
                      required
                    />
                  </div>
                </div>
              </div>
              <div id="button">
                <div className="button">
                <button type="submit">Sign Up</button>
                </div>
              </div>
              <span>Already have an account? <Link to="/login"> 
              <span id="signlogin">Log in</span>
              </Link></span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
