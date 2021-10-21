import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { fullName, userName, email, password, reEnterPassword, phone } =
      user;
    if (
      fullName &&
      userName &&
      email &&
      phone &&
      password &&
      password === reEnterPassword
    ) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="container border border-primary p-2 rounded my-2">
      <h1 className="text-center rounded-pill border border-success">Register</h1>
      <div className="border border-warning border border-5 rounded">
        <div className="text-center">
          <label htmlFor="fullName">Full Name</label>
          <br />
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            placeholder="Full Name"
            onChange={handleChange}
          />
        </div>

        <div className="text-center">
          <label htmlFor="username">User Name</label>
          <br />
          <input
            type="text"
            name="userName"
            value={user.userName}
            placeholder="User Name"
            onChange={handleChange}
          />
        </div>

        <div className="text-center">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder="Your Email"
            onChange={handleChange}
          />
        </div>

        <div className="text-center">
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            type="tel"
            name="phone"
            value={user.phone}
            placeholder="Phone Number"
            onChange={handleChange}
          />
        </div>

        <div className="text-center">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Your Password"
            onChange={handleChange}
          />
        </div>

        <div className="text-center">
          <label htmlFor="password">Conform Password</label>
          <br />
          <input
            type="password"
            name="reEnterPassword"
            value={user.reEnterPassword}
            placeholder="Re-enter Password"
            onChange={handleChange}
          />
        </div>
        <div className="text-center my-1">
          <button className="btn btn-danger " onClick={register}>
            Register
          </button>
          <div className="text-center">Already Have An Account</div>
          <button
            className="btn btn-primary "
            onClick={() => history.push("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
