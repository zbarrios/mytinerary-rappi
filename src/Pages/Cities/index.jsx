import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import "./cities.css";
import { useDispatch, useSelector } from "react-redux";
import ContainerMain from "../../Layouts/ContainerMain";
import ScreenContainer from "../../Layouts/ScreenContainer";
import { getCitiesByName } from "../../../store/actions/citiesActions";

const styles = {
  backgroundImage: `url("https://images.pexels.com/photos/4239622/pexels-photo-4239622.jpeg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function Cities() {

  const dispatch = useDispatch();
  const { citiesFiltered } = useSelector((state) => state.citiesStore);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getCitiesByName(text));
  }, [text, dispatch]); 

  return (
    <>
      <div style={styles} className="hero-background"></div>
      <div>
          <label htmlFor="city">
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Search for cities"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
      <div className="container">
       
        {citiesFiltered.map((city) => (
          <Card
            cityP={city}
            key={city._id}
          />
        ))}
      </div>
    </>
  );
}
