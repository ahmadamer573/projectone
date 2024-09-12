import Header from "../../../components/Header";
import axios from "axios";
import React, { useContext, useState } from "react";
import { User } from "../../website/context/userContext";
import { useNavigate } from "react-router-dom";
import './login.css';
import Cookies from "universal-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Err, setErr] = useState(false);
  const [accept, setAccept] = useState(false);

  const nav = useNavigate();

  const cookie = new Cookies();

  const userNow = useContext(User);

  async function Submit(e) {
    e.preventDefault();
    try {
      let res = await axios.post(`http://127.0.0.1:8000/api/login`, {
        email: email,
        password: password,
      });
      const userDetails = res.data.data.user;
      const token = res.data.data.token;
      cookie.set("Bearer " ,token);

      userNow.setAuth({ token, userDetails });
      nav('/dashboard');
    } catch (err) {
      if (err.response.status === 401) {
        setErr(true);
      }
      setAccept(true);
    }
  }
  return (
    <div>
      <Header />
      <div className="parent login">
        <div className=" login register">
          <form onSubmit={Submit}>
            <label htmlFor={"email"}>Email:</label>
            <input
              id={"email"}
              type={"email"}
              placeholder={"Email..."}
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor={"password"}>Password:</label>
            <input
              id={"password"}
              type={"password"}
              placeholder={"Password..."}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 8 && accept && (
              <p className="error">password must be more than 8 char</p>
            )}
            <div style={{ textAlign: "center" }}>
              <button type={"submit"}>Login</button>
            </div>
            {accept && Err && (
              <p className="error">wrong Password or Email</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};