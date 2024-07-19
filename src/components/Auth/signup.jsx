import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMain } from "../../hook/useMain";

const Signup = () => {
  const navigate = useNavigate;
  const { signup } = useMain();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    conformpassword: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const singdata = async(e) => {
    e.preventDefault(); // Prevent the default form submission
    // console.log(formData);
    const {name, email, phone, password, conformpassword} = formData;

    const data = await signup({name, email, phone, password, conformpassword})
    if (data) {
      console.log("signup is successfully", data)
      navigate("/")
    }else{
      console.log("signup is failed");
    }

  };

  return (
    <>
      <div id="form-container">
        <div className="container">
          <div className="sub-container">
            <h2>Signup Form</h2>
            <form action="" onSubmit={singdata}>
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="name">
                      Name <span className="star">*</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handlechange}
                      value={formData.name}
                      required
                    />
                  </div>
                </div>
              </div>
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="email">
                      email <span className="star">*</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handlechange}
                      value={formData.email}
                      required
                    />
                  </div>
                </div>
              </div>
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="phone">
                      Phone <span className="star">*</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      onChange={handlechange}
                      value={formData.phone}
                      required
                    />
                  </div>
                </div>
              </div>
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="password">
                      {" "}
                      Set password <span className="star">*</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={handlechange}
                      value={formData.password}
                      required
                    />
                  </div>
                </div>
              </div>
              <div id="">
                <div className="form-group">
                  <div>
                    <label for="conformpassword">
                      comform password <span className="star">*</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="conformpassword"
                      name="conformpassword"
                      onChange={handlechange}
                      value={formData.conformpassword}
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
              <span>
                Already have an account?{" "}
                <Link to="/login">
                  <span id="signlogin">Log in</span>
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
