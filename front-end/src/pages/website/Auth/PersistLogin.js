import axios from "axios";
import { Outlet } from "react-router-dom";
import { User } from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import LoadingScreen from "../../../components/Loading";
import Cookies from "universal-cookie";

export default function PersistLogin() {
  const [loading, setLoading] = useState(true);
  const context = useContext(User);
  const token = context.auth.token;
  //cookie
  const cookie = new Cookies();
  const getToken = cookie.get("Bearer ");

  useEffect(() => {
    async function refresh() {
      try {
        await axios
          .post("http://127.0.0.1:8000/api/refresh", null, {
            headers: {
              Authorization: "Bearer " + getToken,
            },
          })
          .then((data) => {
            console.log(data)
            cookie.set("Bearer", data.data.token);
            context.setAuth((prev) => {
              return {
                userDetails: data.data.userDetails,
                token: data.data.token,
              };
            });
          });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    !token ? <Outlet /> : setLoading(false);
  }, []);

  return loading ? <LoadingScreen /> : <Outlet />;
}
