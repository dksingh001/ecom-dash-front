import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMain } from "../../hook/useMain";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const Login = () => {
  const navigate = useNavigate();
  const { login } = useMain();
  const [formdata, setFromData] = useState({email:"", password:""});

  const handlechange = (e) => {
    // setFromData((predata) => ({
    //   ...predata,
    //   [e.target.value]: e.target.value,
    // }));
    const { name, value } = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const Submitdata = async (e) => {
    e.preventDefault();
  
    const { email, password } = formdata;
  
    try {
      // Attempt to login with the credentials
      const data = await login({ email, password });
      console.log(data)
      if (data && data.token) {
        const { id } = data.user;
  
        // Save token and user ID in localStorage
        localStorage.setItem("ecomtoken", JSON.stringify({ token: data.token }));
        localStorage.setItem("userId", id);
  
        // Show success notification
        NotificationManager.success('Login successful!', 'Success', 3000);
  
        // Navigate to home page
        navigate("/");
      } else {
        // Show error notification if login failed
        NotificationManager.error('Login failed. Please check your credentials.', 'Error', 3000);
      }
    } catch (error) {
      // Show error notification in case of an exception
      NotificationManager.error('An error occurred during login. Please try again.', 'Error', 3000);
      console.log("Error during login:", error);
    }
  };
  
  const testNotification = () => {
    NotificationManager.success('Test notification', 'Success !', 1000);
  };

  return (
    <>
      <div id="form-container">
        <div className="container">
          <div className="sub-container">
            <h2>Login Form</h2>
            <form action="" onSubmit={Submitdata}>
              <div id="">
                <div className="form-group">
                  <div>
                    <label htmlFor="email">
                      Email / name <span className="star">*</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handlechange}
                      value={formdata.email}
                      required
                    />
                  </div>
                </div>
              </div>
              <div id="">
                <div className="form-group">
                  <div>
                    <label htmlFor="conform_password">
                      Enter your password <span className="star">*</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="conform_password"
                      name="password"
                      onChange={handlechange}
                      value={formdata.password}
                      required
                    />
                  </div>
                </div>
              </div>
              <div id="button">
                <div className="button">
                  <button >Login</button>
                  {/* <button onClick={testNotification}>Test Notification</button> Manual test */}

                </div>
              </div>
              <span id="spantag">
                Don't have an account?
                <Link to="/signup">
                  <span id="signlogin">Sign up</span>
                </Link>
              </span>
            </form>
            <NotificationContainer /> {/* Required to display notifications */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
