import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
      : "text-gray-500 hover:text-blue-500";

  return (
    <nav className="flex gap-6 p-4">
      <NavLink to="/" end className={navLinkClass}>
        Home
      </NavLink>

      <NavLink to="/about" className={navLinkClass}>
        About
      </NavLink>

      <NavLink to="/contact" className={navLinkClass}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
