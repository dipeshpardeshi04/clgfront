import React, { useState } from "react";
import "./Signinpopup.css";
import { assets } from "./assets";
import axios from "axios";
import toast from "react-hot-toast";

const Signinpopup = ({ setSignin}) => {
  // const [currState, setcurrState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        name:  name , // Send name only for Sign Up
        password,
      });
      toast.success("Successfully signed up!");
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
      toast.error("User already exists! Please login");
    }
    setSignin(false);
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>Sign up</h2>
          <img
            onClick={() => setSignin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-input">
          {/* {currState === "Sign Up" && ( */}
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleNameChange}
              required
            />
          {/* )} */}
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Your Email"
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">
          {/* {currState === "Sign Up" ? "Sign Up" : "Login"} */}
          Sign Up
        </button>
        <div className="login-popup-condition">
          <input
            type="checkbox"
            name="login-checkbox"
            id="login-checkbox"
            required
          /><p className="m0">
            By continuing, you agree to our{" "}
            <span>Terms and Privacy Policy</span>
          </p>
        </div>
        
        {/* {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setcurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
  <p>Already have an account?{" "}<span onClick={() => setcurrState("Login")}>Login here</span></p>
        )} */}
      </form>
    </div>
  );
};

export default Signinpopup;
