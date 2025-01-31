import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onRegisterClick = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("All fields are required");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match", error);
    } else {
      setError("");
      navigate("/login");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-pageBgColor">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-darkColor text-center mb-6">Register</h1>
        </div>
        <div className="mb-4">
          <h3 className=" text-darkColor font-medium">Name</h3>
          <input
            value={name}
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreenColor"
          />
        </div>
        <div className="mb-4">
          <h3 className=" text-darkColor font-medium">Email</h3>
          <input
            value={email}
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreenColor"
          />
        </div>
        <div className="mb-4">
          <h3 className=" text-darkColor font-medium">Password</h3>
          <input
            value={password}
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreenColor"
          />
        </div>
        <div className="mb-4">
          <h3 className=" text-darkColor font-medium">Confirm Password</h3>
          <input
            value={confirmPassword}
            type="password"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreenColor"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full bg-navbarColor text-gray-700 py-2 rounded-l"
            type="button"
            onClick={onRegisterClick}
            value={"Register"}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
