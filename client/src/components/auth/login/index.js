import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../reducers/login";
import { GoogleLogin } from "react-google-login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => {
    return {
      token: state.login.token,
    };
  });
  useEffect(() => {
    LogOut();
  }, []);
  const LogOut = () => {
    localStorage.clear();
    dispatch(setToken({ token: "" }));
  };
  const signIn = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        localStorage.setItem("token", result.data);
        dispatch(setToken(result.data));
        history.push("/");
      })
      .catch((err) => {
        setMessage(err.response.data);
      });
  };
  const ResponseGoogle = (response) => {
    localStorage.setItem("token", state.token);
    dispatch(setToken(response.accessToken));
  };
  return (
    <div className="login">
      <h1>Login Page</h1>
      <table>
      <tbody>
        <tr>
          <td>
            <label>Email</label>
          </td>
          <td>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td>
            <label>Password</label>
          </td>
          <td>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td></td>
          <td>
            <button onClick={signIn} className="button">
              Login
            </button>
              <p> or </p>
              <div className="google">
                <GoogleLogin
                  clientId="1018427859000-rr1mqigkk7fvghqfnh85ph78eru3lo8m.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={ResponseGoogle}
                  onFailure={ResponseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </td>
          </tr>
        <tr><td>{message}</td></tr>
        </tbody>
        <p>
          Sign Up for website <Link to="/register">Register</Link>
        </p>
      </table>
    </div>
  );
};
export default Login;
