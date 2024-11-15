import { useLocation, useNavigate } from "react-router-dom";

let styles = {
  backgroundImage: `url("https://images.pexels.com/photos/4239622/pexels-photo-4239622.jpeg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function City() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const city = location.state?.city;
  styles.backgroundImage = `url(${city?.url})`;

  return (
    <>
      <div style={styles} className="hero-background"></div>
      <div>
        <h1>{city?.city}</h1>
        <p>{city?.url}</p>
        <p>{city?.description}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>
  );
}
