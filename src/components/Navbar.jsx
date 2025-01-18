import { NavLink } from "react-router";

export function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-character">Add Character</NavLink>
        </li>
        <li>
          <NavLink to="/update-character">Update Character</NavLink>
        </li>
        <li>
          <NavLink to="/add-planet">Add Planet</NavLink>
        </li>
        <li>
          <NavLink to="/update-planet">Update Planet</NavLink>
        </li>
      </ul>
    </nav>
  );
}
