import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, appleProvider } from "../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import google from "../icon/google.png";
import apple from "../icon/apple.png";
import Logo from "../logo.png";
import "../App.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      login(userCredential.user);
      navigate("/store");
    } catch (error) {
      let errorMessage = "Failed to create an account.";
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email already in use. Please use a different email.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/weak-password":
          errorMessage =
            "Password is too weak. Please use a stronger password.";
          break;
        default:
          errorMessage = "An unexpected error occurred. Please try again.";
          break;
      }
      setError(errorMessage);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithRedirect(auth, googleProvider);
      console.log("res:", result);
      login(result.user);
      navigate("/store");
    } catch (error) {
      setError("Google sign-up failed.");
    }
  };

  const handleAppleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      login(result.user);
      navigate("/store");
    } catch (error) {
      setError("Apple sign-up failed.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container flex h-screen text-center">
      <div className="signup-form flex-1 flex justify-center items-center bg-white">
        <div className="p-6 login-card rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">Welcome To</h2>
          <h2 className="text-4xl font-bold text-center">
            Furni<span className="text-blue-400">Flex</span>
          </h2>
          <p className="mb-6 text-center text-gray-500 font-medium">
            Signup for purchase your desired products
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSignup}>
            <div className="mb-4 flex space-x-4">
              {/* First Name Field */}
              <div className="relative w-1/2">
                <label className="input-label z-50 pt-1 text-xs absolute top-0 left-2.5 block font-medium mb-1">
                  First Name (Optional)
                </label>
                <div className="relative flex">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name (optional)"
                    className="w-full pl-2.5 text-sm pb-1 border rounded-md text-black"
                    style={{ paddingTop: "20px" }}
                  />
                </div>
              </div>

              {/* Last Name Field */}
              <div className="relative w-1/2">
                <label className="input-label z-50 pt-1 text-xs absolute top-0 left-2.5 block font-medium mb-1">
                  Last Name (Optional)
                </label>
                <div className="relative flex">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name (optional)"
                    className="w-full pl-2.5 text-sm pb-1 border rounded-md text-black"
                    style={{ paddingTop: "20px" }}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4 relative">
              <label className="input-label z-50 pt-1 text-xs absolute top-0 left-2.5 block font-medium mb-1">
                Email Address
              </label>
              <div className="relative flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-2.5 text-sm pb-1 border rounded-md text-black"
                  style={{ paddingTop: "20px" }}
                  required
                />
              </div>
            </div>

            <div className="mb-4 relative">
              {/* Label for the input */}
              <label className="input-label z-50 pt-1 text-xs absolute top-0 left-2.5 block font-medium mb-1">
                Password
              </label>

              {/* Password Input with show/hide functionality */}
              <div className="relative flex">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full input-pass-email pl-2.5 text-sm pb-1 border rounded-md text-black"
                  style={{ paddingTop: "20px" }}
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 cursor-pointer"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="font-medium">
                I agree to the{" "}
                <Link to="/terms" className="underline underline-offset-1">
                  Terms & Policy
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-black text-lg font-medium text-white rounded-md"
            >
              Signup
            </button>
          </form>
          <div className="mt-4 text-center">or</div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleGoogleSignup}
              className="button-border w-1/2 py-4 border gap-2.5 rounded-md text-xs font-medium mr-2 flex items-center justify-center"
            >
              <img src={google} alt="google" className="h-6 w-6" />
              Sign in with Google
            </button>
            <button
              onClick={handleAppleSignup}
              className="button-border w-1/2 py-4 border gap-2.5 rounded-md text-xs font-medium flex items-center justify-center"
            >
              <img src={apple} alt="apple" className="h-6 w-6" />
              Sign in with Apple
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm font-medium">
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  color: "#0f3dde",
                }}
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div
        className="signup-image flex-1 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/image/login-page.png')" }} // Replace with actual image path
      >
        <div className="text-center text-white p-8 rounded-md flex flex-col items-center justify-center">
          <img src={Logo} alt="FurniFlex" className="size-20 mb-2" />
          <h1 className="text-4xl font-bold mb-4">
            Furni<span className="text-blue-400">Flex</span>
          </h1>
          <p className="text-center px-36">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
