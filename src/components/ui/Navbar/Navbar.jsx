import { NavLink } from "react-router";
import "./navbar.css";

export function Navbar() {
  return (
    <div className="nav">
      <div className="container-nav">
        <NavLink className="logo" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Dragon_Ball_Z_logo.svg"
            alt="Dragon Ball Logo"
          />
        </NavLink>
        <NavLink className="btn" to="/add-character">
          Add Character
        </NavLink>
        <NavLink className="btn" to="/update-character">
          Update Character
        </NavLink>
        <NavLink className="btn" to="/add-planet">
          Add Planet
        </NavLink>
        <NavLink className="btn" to="/update-planet">
          Update Planet
        </NavLink>
      </div>
    </div>
  );
}
