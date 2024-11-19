import { NavLink } from "react-router-dom";
import "./navbar.css";
import TravelLogo from "../assets/travel.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCities } from "../../store/actions/citiesActions";
import { logout } from "../../store/actions/authActions";
const routes = [
  { to: "/", text: "Home", requireAuth: false, unrequireAuth: false },
  { to: "/cities", text: "Cities", requireAuth: true, unrequireAuth: false },
  { to: "/sign-in", text: "Login", requireAuth: false, unrequireAuth: true },
];

export default function NavBar() {
  const token = useSelector((state) => state.authStore.token);
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
        {routes.map(
          (route, index) =>
            (!route.requireAuth || token) &&
            (!route.unrequireAuth || !token) && (
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
            )
        )}
      </ul>

      {token && (
        <button className="bg-slate-800 hover:bg-slate-500 text-white px-4 py-2 rounded"
        onClick={()=>dispatch(logout())}>
          Sign Out
        </button>
      )}
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
