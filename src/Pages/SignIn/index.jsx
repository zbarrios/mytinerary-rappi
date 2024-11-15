import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

let styles = {
  backgroundImage: `url("https://images.pexels.com/photos/4239622/pexels-photo-4239622.jpeg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authStore);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <>
      {" "}
      <div style={styles} className="hero-background">
        <div style={{ display: "flex", flexDirection: "column" ,marginTop:"20%"}}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign In</button>
            {authState.status === "loading" && <p>Loading...</p>}
            {authState.error && (
              <p style={{ color: "red" }}>{authState.error}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
