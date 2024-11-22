import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../../../store/actions/authActions";

let styles = {
  backgroundImage: `url("https://images.pexels.com/photos/4239622/pexels-photo-4239622.jpeg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.authStore);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const loginWithGoogle = () => {
    window.location.href = "http://localhost:8080/api/auth/signin/google"
  }


  const loading = authStore.loading;
  const error = authStore.error;

  return (
    <>
      <div style={styles} className="hero-background flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm p-6 space-y-4 flex flex-col items-center justify-center h-2/4 bg-[#011f26] rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-center text-white">
            Sign In
          </h2>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-teal-600 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Sign In
          </button>

          {loading && <p className="text-center text-teal-400">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
        </form>
        <button
          type="submit"
          className="w-1/3 py-2 font-semibold text-white bg-red-500 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          onClick={() => loginWithGoogle()}
        >
          Login With Google
        </button>
      </div>
    </>
  );
};

export default LoginForm;
