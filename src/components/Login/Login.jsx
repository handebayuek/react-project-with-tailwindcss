import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClick = () => {
    if (email === "") {
      setEmailError("Email cannot be empty");
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("Password cannot be empty");
    } else {
      setPasswordError("");
    }

    if (email && password) {
      navigate("/");
    }
  };

  const onRegisterClick = () => {
    navigate("/registration");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-pageBgColor">‚
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-darkColor text-center mb-6">Login</h1>
        <div className="mb-4">
          <label className="block text-darkColor font-medium">Email</label>
          <input
            value={email}
            placeholder="Enter your email here..."
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreenColor"
          />
          {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
        </div>
        <div className="mb-4">
          <label className=" text-darkColor font-medium">Password</label>
          <input
            value={password}
            placeholder="Enter your password here..."
            onChange={(ev) => setPassword(ev.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreenColor"
            type="password"
          />
          {passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="w-full bg-bgColor text-white py-2 rounded-lg "
            onClick={onButtonClick}
          >
            Log in
          </button>
          <p className="text-center">or</p>
          <button
            className="w-full bg-navbarColor text-gray-700 py-2 rounded-l "
            onClick={onRegisterClick}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
