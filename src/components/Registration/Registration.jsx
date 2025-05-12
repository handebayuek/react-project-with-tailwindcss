
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const onRegisterClick = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
    } else if (password !== confirmPassword) {

      setError('Passwords do not match');

    } else {
      setError('');
      navigate('/login');
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
            type="text"
            value={name}
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}

            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreenColor"
          />
        </div>
        <div className="mb-4">
          <h3 className=" text-darkColor font-medium">Email</h3>

          <input
            type="email"
            value={email}
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}

            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreenColor"
          />
        </div>
        <div className="mb-4">
          <h3 className=" text-darkColor font-medium">Password</h3>

          <input
            type="password"
            value={password}
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}

            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreenColor"
          />
        </div>
        <div className="mb-4">
          <h3 className=" text-darkColor font-medium">Confirm Password</h3>

          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm your password..."
            onChange={(e) => setConfirmPassword(e.target.value)}

            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-darkGreenColor"
          />
        </div>

        {error && <span className="text-red-500 text-sm">{error}</span>}

        <div className="flex flex-col items-center gap-2 mt-4">
          <button

            onClick={onRegisterClick}
            className="w-full border border-darkGreenColor text-darkGreenColor py-2 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
