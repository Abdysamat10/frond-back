import React, { useState } from "react";
import { logout, signInUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const handlerLogin = () => {
    console.log(email, password);
    dispatch(signInUser({ email, password }));
  };

  const logouthandler = () => {
    dispatch(logout);
  };

  return (
    <div>
      <div>
        <div className="flex flex-column align-items-center">
          <h3>Login System</h3>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={handlerLogin} className="mt-3">
            Login
          </button>
          <button onClick={logouthandler} className="mt-3">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
