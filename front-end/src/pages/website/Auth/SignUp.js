import Header from "../../../components/Header";
import axios from "axios";
import React, { useContext, useState } from "react";
import { User } from "../../website/context/userContext";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [accept, setAccept] = useState(false);
  const cookie = new Cookies();

  const nav = useNavigate();
  const userNow = useContext(User);
  console.log(userNow);

  async function Submit(e) {
    e.preventDefault();
    try {
      let res = await axios.post(`http://127.0.0.1:8000/api/register`, {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordR,
      });
      const userDetails = res.data.data.user;
      const token = res.data.data.token;
      cookie.set("Bearer " ,token);

      userNow.setAuth({ token, userDetails });
      nav('/dashboard');
    } catch (err) {
      if (err.response.status === 422) {
        setEmailError(true);
      }
      setAccept(true);
    }
  }
  return (
    <div>
      <Header />
      <div className="parent login">
        <div className="register login">
          <form onSubmit={Submit}>
            <label htmlFor={"name"}>Name:</label>
            <input
              id={"name"}
              type={"text"}
              placeholder={"Name..."}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name.length < 2 && accept && (
              <p className="error">name must be more than 2 char</p>
            )}

            <label htmlFor={"email"}>Email:</label>
            <input
              id={"email"}
              type={"email"}
              placeholder={"Email..."}
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {accept && emailError === 422 && (
              <p className="error">email is already been taken</p>
            )}
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
            <label htmlFor={"repeat"}>Repeat Password:</label>
            <input
              id={"repeat"}
              type={"password"}
              placeholder={"Repeat Password..."}
              value={passwordR}
              onChange={(e) => setPasswordR(e.target.value)}
            />
            {passwordR !== password && accept && (
              <p className="error">password does not match</p>
            )}
            <div style={{ textAlign: "center" }}>
              <button type={"submit"}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
