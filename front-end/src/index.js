import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./pages/dashboard/dashboard.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // step 1 to using router
import UserProvider from "./pages/website/context/userContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>
);

