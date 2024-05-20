import { useState } from "react";
import axios from "axios";
import Nasalogo from "../../public/NASA_logo.svg.png";
import { useNavigate } from "react-router-dom";
function Register() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();
    const newUser = {
      userName: username,
      fullname,
      password,
      email,
      address,
      contact,
    };

    axios
      .post("http://localhost:8070/User/add", newUser)
      .then(() => {
        alert("Registered successfully");
        navigate("/login");
      })
      .catch((err) => {
        alert(err);
      });
    ``;
  }

  return (
    <div className="containerRegister">
      <img src={Nasalogo} alt="" className="logo-form" />
      <h1>Register</h1>
      <form onSubmit={sendData} className="formRegister">
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Fullname
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Fullname"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="textarea" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Contact" className="form-label">
            Contact
          </label>
          <input
            type="text"
            className="form-control"
            id="Contact"
            placeholder="Contact"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p className="login-link">
          Already have a account...<a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
export default Register;
