import { useState, useEffect, useRef } from "react";
import ContainerMain from "../../Layouts/ContainerMain";
import ScreenContainer from "../../Layouts/ScreenContainer";
import ScreenHelperContainer from "../../Layouts/ScreenHelperContainer";
import debounce from "lodash.debounce";
import "./home.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../../../store/actions/citiesActions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../store/actions/authActions";
import axios from "axios";

const styles = {
  backgroundImage: `url("https://images.pexels.com/photos/4239622/pexels-photo-4239622.jpeg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const loginWithToken = async (token) => {
  try {
    console.log("Se ejecuto Login With Token");

    const response = await axios.get(
      "http://localhost:8080/api/users/validateToken",
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

export default function Home() {
 
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);

      loginWithToken(token).then((user) => {
        dispatch(setUser({ user, token }));
      });
      navigate("/")
    }
    
  }, [dispatch,navigate]);

  return (
    <>
      <div style={styles} className="hero-background">
        <ContainerMain>
          <div className="hero-texts">
            <h1 className="title">MyTinerary</h1>
            <p className="subtitle">
              Find your perfect trip, designed by insiders who know and love
              their cities
            </p>
          </div>
        </ContainerMain>
      </div>
    </>
  );
}
