import { NavLink } from "react-router-dom";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ cityP }) => {
  const navigate = useNavigate();

  const { city, description, url } = cityP;

  const handleClickCity = (event,cityToRender) => {
    event.preventDefault();

    navigate("/city", {
      state: {
        city: cityToRender
      },
    });
  };

  return (
    <a className={"link-card"} onClick={(e) => handleClickCity(e,cityP)}>
      <div className="card-citie">
        <div className="card-image">
          <img src={url} alt="card" className="image" />
        </div>
        <div className="card-cover"></div>
        <div className="card-text">
          <h2>{city}</h2>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
