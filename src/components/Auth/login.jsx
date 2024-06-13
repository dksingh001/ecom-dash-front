import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <>
      <div id="form-container">
        <div className="container">
          <div className="sub-container">
            <h2>Login Form</h2>
            <form action="">
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="name">
                      Email / Password <span className="star">*</span>
                    </label>
                  </div>
                  <div>
                    <input type="text" id="name" name="name" required />
                  </div>
                </div>
              </div>
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="conform_password">
                      Enter your password <span className="star">*</span>
                    </label>
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
                  <button type="submit">Login</button>
                </div>
              </div>
              <span id="spantag">Don't have an account?  <Link to="/signup"> 
              <span id="signlogin">Sign up</span>
              </Link></span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
