import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "lightyellow", testDecoration: "none" } : {}
        }
        // className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink to="courses">Courses</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
