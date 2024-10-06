import React from "react";
import NavBar from "../Components/NavBarMain.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header>
       <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
