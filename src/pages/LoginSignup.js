import React from "react";
import "./loginSignup.css";
import sideBg from "../utils/car1.gif";
import GoogleButton from "react-google-button";
const LoginSignup = () => {
  return (
    <>
      <div className="d-flex row col-12 ">
        <div className="carBgMain col-lg-8 col-md-6 col-12">
          <img src={sideBg} alt="car" className="carBgLeft" />
        </div>
        <div className="loginNsignPage col-lg-4 col-md-6 col-12">
          <div className="main ">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">
              <form className="marginTop">
                <label for="chk" aria-hidden="true">
                  Sign up
                </label>
                <input
                  type="text"
                  name="txt"
                  placeholder="User name"
                  required
                />
                <input type="email" name="email" placeholder="Email" required />
                <input
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required
                />
                <button>Sign up</button>
              </form>
            </div>

            <div className="login">
              <form className="marginTop">
                <label for="chk" aria-hidden="true">
                  Login
                </label>
                <input type="email" name="email" placeholder="Email" required />
                <input
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required
                />
                <button>Login</button>
                <div className="orMain">
                  <p className="or text-dark text-center">Or</p>
                </div>
                <div className="googleBtn">
                  <GoogleButton className="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
