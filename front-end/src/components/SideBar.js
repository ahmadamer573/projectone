import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUserPlus } from "@fortawesome/free-solid-svg-icons";
export default function SideBar() {
  return (
    <div className="side-bar">
      <NavLink to="/dashboard/users" className="item-link">
        <FontAwesomeIcon icon={faUsers} style={{color: "#003694",marginRight:"10px"}} />
        Users
      </NavLink>
      <NavLink to="/dashboard/user/create" className="item-link">
      <FontAwesomeIcon icon={faUserPlus} style={{color: "#003694",marginRight:"10px"}} />New User
      </NavLink>
    </div>
  );
}
