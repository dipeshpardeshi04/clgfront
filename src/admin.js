import React, { useState } from "react";
import "./Loginpopup.css";
import { assets } from "./assets";
import axios from "axios";
import toast from "react-hot-toast";

const Loginpopup = ({ setSignadmin, setUserName}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);



//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevents the default form submission behavior

   
//     try {
//       const response = await axios.post("http://localhost:5000/adminlogin", {
//         email,
//         password,
//       });

//       // Extract user data from the response
//       const { user } = response.data;
//       toast.success("You Are Logged In!");
//       console.log(user);
//       setSignadmin(false);

//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Invalid Credentials");
//     }
//   };
  // let a = false;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
  
    try {
      const response = await axios.post("http://localhost:5000/adminlogin", {
        email,
        password,
      });
  
      // Extract user data from the response
      const { redirectUrl } = response.data;
      toast.success("You Are Logged In!");
  
      // Perform the redirect manually in the frontend
      if (redirectUrl) {
        window.location.href = `http://localhost:5000${redirectUrl}`;
      }
  
    } catch (error) {
      console.error("Error:", error);
      toast.error("Invalid Credentials");
    }
  };
  
  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>Admin Login</h2>
          <img
            onClick={() => setSignadmin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-input">
           {/* {a && <Landing username={username}/>} */}
            {/* <input
              type="text"
              placeholder="Your Name"
              value={userName}
              onChange={handleNameChange}
              required
            /> */}
          
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Admin Email"
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Admin Password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">
          Admin Login
        </button>
        {/* <div className="login-popup-condition">
          <input
            type="checkbox"
            name="login-checkbox"
            id="login-checkbox"
            required
          />
        </div> */}
        
      </form>
    </div>
  );
};

export default Loginpopup;


