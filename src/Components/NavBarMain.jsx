import { NavLink } from "react-router-dom";
import "./navbar.css";
import TravelLogo from "../assets/travel.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCities } from "../../store/actions/citiesActions";
const routes = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" },
  { to: "/sign-in", text: "Login" },
];

export default function NavBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return (
    <nav className="navbar">
      <NavLink>
        <span className="logo">Logo</span>
      </NavLink>
      <ul className="navbar-routes">
        {routes.map((route, index) => (
          <li
            key={index}
            className="font-semibold text-lg sm:text-xl text-slate-600 hover:text-emerald-950"
          >
            <NavLink
              to={route.to}
              className={({ isActive }) =>
                isActive ? "text-emerald-500 hover:text-emerald-700" : ""
              }
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink>
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="user"
          className="h-6 sm:h-8"
        />
      </NavLink>
    </nav>
  );
}
