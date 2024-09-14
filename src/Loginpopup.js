import React, { useState } from "react";
import "./Loginpopup.css";
import { assets } from "./assets";
import axios from "axios";
import toast from "react-hot-toast";

const Loginpopup = ({ setshowlogin }) => {
//   const [currState, setcurrState] = useState("Sign Up");
//   const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

//   const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await axios.post("http://localhost:5000/create", {
        // email,
        name:  name , // Send name only for Sign Up
        password,
      });
      toast.success("User Logged In!");
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
      toast.error("");
    }
    setshowlogin(false);
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>Login</h2>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-input">
           
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleNameChange}
              required
            />
          
          {/* <input
            type="email"
            id="email"
            value={email}
            placeholder="Your Email"
            onChange={handleEmailChange}
            required
          /> */}
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
          Login
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
        
      </form>
    </div>
  );
};

export default Loginpopup;
