import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import NotFound from "./Pages/NotFound";
import MainLayout from "./Layouts/MainLayout";
import City from "./Pages/City";
import SignIn from "./Pages/SignIn";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/authActions";




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
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

const loginWithToken = async (token) => {
  try {
    console.log("Se ejecuto Login With Token");

    const response = await axios.get(
      "http://localhost:8080/mytinerary/users/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.response;
  } catch (error) {
    console.log("error", error);
  }
};

function App() {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }));
    });
  }

  return <RouterProvider router={router} />;
}

export default App;
