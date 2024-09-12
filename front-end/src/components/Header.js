import { Link } from "react-router-dom";
export default function Header() {
  function handleLogOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <div className="container shadow">
      <nav className="d-flex p-2">
        <div className="d-flex flex-1">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="d-flex">
          <Link
            to="/register"
            style={{ textAlign: "center" }}
            className="register-btn">
            {/* step 2 to using router */}
            Register
          </Link>
          <Link
            to="/login"
            style={{ textAlign: "center" }}
            className="register-btn"> 
            {/* step 2 to using router */}
            Login
          </Link>
          <Link
            to="/dashboard"
            style={{ textAlign: "center" }}
            className="register-btn">
            {/* step 2 to using router */}
            Dashboard
          </Link>
        </div>
        {/* <div className="register-btn" onClick={handleLogOut}>Log out</div> */}
      </nav>
    </div>
  );
}
