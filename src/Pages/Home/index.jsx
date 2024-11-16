import { useState, useEffect, useRef } from "react";
import ContainerMain from "../../Layouts/ContainerMain";
import ScreenContainer from "../../Layouts/ScreenContainer";
import ScreenHelperContainer from "../../Layouts/ScreenHelperContainer";
import debounce from "lodash.debounce";
import "./home.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../../../store/actions/citiesActions";

const styles = {
  backgroundImage: `url("https://images.pexels.com/photos/4239622/pexels-photo-4239622.jpeg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function Home() {
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
