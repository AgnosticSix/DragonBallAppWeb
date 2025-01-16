import { NavLink } from "react-router";

export function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add-character">Add Character</NavLink>
          </li>
          <li>
            <NavLink to="/update-character">Update Character</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
