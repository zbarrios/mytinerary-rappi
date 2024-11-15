import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import NotFound from "./Pages/NotFound";
import MainLayout from "./Layouts/MainLayout";
import City from "./Pages/City";
import SignIn from "./Pages/SignIn";


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/cities",
        element: <Cities></Cities>,
      },
      {
        path: "/city",
        element: <City></City>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      }
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
