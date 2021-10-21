import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };

  return (
    <div className="container border border-primary p-2 rounded my-2">
      <h1 className="text-center rounded-pill border border-success">Login</h1>
      <div className="border border-warning border border-5 rounded">
        <div className=" text-center">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your Email"
          />
        </div>
        <div className=" text-center">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          />
        </div>
        <div className=" text-center my-1">
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
          <div>Create An Account</div>
          <button
            className="btn btn-danger"
            onClick={() => history.push("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
