import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, appleProvider } from "../firebase/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      login(userCredential.user);
      navigate("/store");
    } catch (error) {
      setError("Invalid email or password!");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      login(result.user);
      navigate("/store");
    } catch (error) {
      setError("Google sign-in failed.");
    }
  };

  const handleAppleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      login(result.user);
      navigate("/store");
    } catch (error) {
      setError("Apple sign-in failed.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container flex h-screen">
      <div className="login-form flex-1 flex justify-center items-center bg-gray-100">
        <div className="w-80">
          <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
          <p className="mb-6">Enter your credentials to access your account</p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  cursor: "pointer",
                  top: "9px",
                  right: "10px",
                }}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
            <div className="mb-4">
              <Link to="/forgot-password" className="text-blue-500">
                Forgot Password?
              </Link>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms">
                I agree to the{" "}
                <Link to="/terms" className="text-blue-500">
                  Terms & Policy
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">or</div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleGoogleSignIn}
              className="w-1/2 py-2 border rounded-md mr-2"
            >
              Sign in with Google
            </button>
            <button
              onClick={handleAppleSignIn}
              className="w-1/2 py-2 border rounded-md"
            >
              Sign in with Apple
            </button>
          </div>
          <div className="mt-6 text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div
        className="login-image flex-1 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/image/login-page.png')" }} // Replace with the actual image path
      >
        <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-md">
          <h1 className="text-4xl font-bold mb-4">FurniFlex</h1>
          <p>
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
