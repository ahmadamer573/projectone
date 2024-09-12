import { Link } from "react-router-dom";
export default function TopBar() {
  return (
    <div>
      <div className="d-flex container shadow">
        <h1>Store</h1>
        <Link to='/' className="register-btn">
          Go To Web Site
        </Link>
        </div>
    </div>
  );
}
