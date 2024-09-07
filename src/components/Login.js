import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, appleProvider } from "../firebase/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import google from "../icon/google.png";
import apple from "../icon/apple.png";
import Logo from "../logo.png";
import { setCookie } from '../utils/cookieUtils';
import "../App.css";

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
      console.log('====================================');
      console.log(result);
      console.log('====================================');
      login(result.user);
      navigate("/store");
      // if (response.success) {
      //   setCookie('authToken', response.token, { days: 7, sameSite: 'lax', secure: true });
      // }
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
      <div className="login-form flex-1 flex justify-center items-center bg-white">
        <div className="p-6 login-card rounded-xl">
          <h2 className="text-3xl font-medium">Welcome Back!</h2>
          <p className="mb-6 text-gray-500 font-medium">
            Enter your credentials to access your account
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
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
            <div className="mb-4 text-right">
              <Link
                to="/forgot-password"
                className=""
                style={{
                  color: "#1E99f5",
                }}
              >
                Forgot Password?
              </Link>
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
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">or</div>

          <div className="mt-4 flex justify-between">
            <button
              onClick={handleGoogleSignIn}
              className="button-border w-1/2 py-4 border gap-2.5 rounded-md text-xs font-medium mr-2 flex items-center justify-center"
            >
              <img src={google} alt="google" className="h-6 w-6" />
              Sign in with Google
            </button>
            <button
              onClick={handleAppleSignIn}
              className="button-border w-1/2 py-4 border gap-2.5 rounded-md text-xs font-medium flex items-center justify-center"
            >
              <img src={apple} alt="apple" className="h-6 w-6" />
              Sign in with Apple
            </button>
          </div>

          {/* <div className="mt-4 flex justify-between">
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
          </div> */}

          <div className="mt-6 text-center">
            <p className="text-sm font-medium">
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  color: "#0f3dde",
                }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div
        className="login-image flex-1 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/image/login-page.png')" }}
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

export default Login;

// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth, googleProvider, appleProvider } from "../firebase/Firebase";
// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { AuthContext } from "../context/AuthContext";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       login(userCredential.user);
//       navigate("/store");
//     } catch (error) {
//       setError("Invalid email or password!");
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       login(result.user);
//       navigate("/store");
//     } catch (error) {
//       setError("Google sign-in failed.");
//     }
//   };

//   const handleAppleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, appleProvider);
//       login(result.user);
//       navigate("/store");
//     } catch (error) {
//       setError("Apple sign-in failed.");
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container flex h-screen">
//       <div className="login-form flex-1 flex justify-center items-center bg-gray-100">
//         <div className="w-80">
//           <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
//           <p className="mb-6">Enter your credentials to access your account</p>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           <form onSubmit={handleLogin}>
//             <div className="mb-4">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 border rounded-md"
//                 required
//               />
//             </div>

//             <div className="mb-4 relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-2 border rounded-md"
//                 required
//               />
//               <span
//                 onClick={togglePasswordVisibility}
//                 style={{
//                   position: "absolute",
//                   cursor: "pointer",
//                   top: "9px",
//                   right: "10px",
//                 }}
//               >
//                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//               </span>
//             </div>
//             <div className="mb-4">
//               <Link to="/forgot-password" className="text-blue-500">
//                 Forgot Password?
//               </Link>
//             </div>
//             <div className="mb-4 flex items-center">
//               <input type="checkbox" id="terms" className="mr-2" required />
//               <label htmlFor="terms">
//                 I agree to the{" "}
//                 <Link to="/terms" className="text-blue-500">
//                   Terms & Policy
//                 </Link>
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 bg-black text-white rounded-md"
//             >
//               Sign In
//             </button>
//           </form>
//           <div className="mt-6 text-center">or</div>
//           <div className="mt-4 flex justify-between">
//             <button
//               onClick={handleGoogleSignIn}
//               className="w-1/2 py-2 border rounded-md mr-2"
//             >
//               Sign in with Google
//             </button>
//             <button
//               onClick={handleAppleSignIn}
//               className="w-1/2 py-2 border rounded-md"
//             >
//               Sign in with Apple
//             </button>
//           </div>
//           <div className="mt-6 text-center">
//             <p>
//               Don't have an account?{" "}
//               <Link to="/signup" className="text-blue-500">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div
//         className="login-image flex-1 bg-cover bg-center flex justify-center items-center"
//         style={{ backgroundImage: "url('/image/login-page.png')" }} // Replace with the actual image path
//       >
//         <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-md">
//           <h1 className="text-4xl font-bold mb-4">FurniFlex</h1>
//           <p>
//             Discover a seamless shopping experience with our curated collection
//             of products. From fashion to electronics, we bring quality.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
