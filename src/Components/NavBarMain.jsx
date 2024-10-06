import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import TravelLogo from "../assets/travel.png";
const routes = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" },
];

export default function NavBar() {
  return (
    <nav className="flex justify-between sm:justify-evenly items-center absolute w-full h-20 px-6 sm:px-2 z-10">
      <NavLink><img src={TravelLogo} alt="logo" className="h-6 sm:h-8 sm:mt-8"/></NavLink>
      <ul className="flex w-1/3 justify-center gap-8 sm:gap-28 sm:mt-8">
        {routes.map((route, index) => (
          <li
            key={index}
            className="font-semibold text-lg sm:text-xl text-slate-600 hover:text-emerald-950"
          >
            <NavLink
              to={route.to}
              className={({ isActive }) =>
                isActive ? "text-emerald-800 hover:text-emerald-800" : ""
              }
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="user" className="h-6 sm:h-8 sm:mt-8"/></NavLink>
    </nav>
  );
}
