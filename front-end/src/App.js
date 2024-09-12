import { Route, Routes } from "react-router-dom"; //step 3 to using router
import "./App.css";
import SignUp from "./pages/website/Auth/SignUp";
import Login from "./pages/website/Auth/Login";
import Home from "./pages/website/Home";
import About from "./pages/website/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/dashboard/users/Users";
import UpdateUser from "./pages/dashboard/users/UpdateUser";
import CreateUser from "./pages/dashboard/users/CreateUser";
import RequireAuth from "./pages/website/Auth/RequireAuth";
import PersistLogin from "./pages/website/Auth/PersistLogin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="users" element={<Users />}></Route>
              <Route path="user/create" element={<CreateUser />}></Route>
              <Route path="users/:id" element={<UpdateUser />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
