import { useState } from "react";
import React from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logoN from "../../public/NASA_logo.svg.png";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:8070/User/get/${username}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "User not found") {
          setLoginMessage("User not found");
          return;
        }
        if (password === res.data.user.password) {
          sessionStorage.setItem("user", JSON.stringify(res.data.user));
          setLoginMessage("Login successful");
          navigate("/UserProfile");
        } else {
          setLoginMessage("Incorrect password");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginMessage("Error logging in. Please try again later.");
      });
  }

  return (
    <div className="login-page">
      <div className="containerLogin">
        <form onSubmit={handleFormSubmit}>
          <img src="../../public/NASA_logo.svg.png" className="loginLogo" />
          <h1>Login</h1>
          <div className="inputBox">
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Username"
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="inputBox">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              required
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have any acoount..<a href="/SignIn">Register</a>
            </p>
          </div>
          {loginMessage && <p>{loginMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
