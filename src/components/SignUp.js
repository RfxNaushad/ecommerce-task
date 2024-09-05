// src/components/Signup.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider, appleProvider } from '../firebase/Firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password, firstName, lastName);
//       login(userCredential.user);
//       navigate('/store');
//     } catch (error) {
//       setError('Failed to create an account.');
//     }
//   };

const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      login(userCredential.user);
      navigate('/store');
    } catch (error) {
      let errorMessage = 'Failed to create an account.';
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email already in use. Please use a different email.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password is too weak. Please use a stronger password.';
          break;
        default:
          errorMessage = 'An unexpected error occurred. Please try again.';
          break;
      }
      setError(errorMessage);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      login(result.user);
      navigate('/store');
    } catch (error) {
      setError('Google sign-up failed.');
    }
  };

  const handleAppleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      login(result.user);
      navigate('/store');
    } catch (error) {
      setError('Apple sign-up failed.');
    }
  };

  return (
    // <div>
    //   <h2>Sign Up</h2>
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    //   <form onSubmit={handleSignup}>
    //     <input
    //       type="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       placeholder="Email"
    //       required
    //     />
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder="Password"
    //       required
    //     />
    //     <button type="submit">Sign Up</button>
    //   </form>

    //   <button onClick={handleGoogleSignup}>Sign up with Google</button>
    //   <button onClick={handleAppleSignup}>Sign up with Apple</button>

    //   <p>Already have an account? <Link to="/login">Log in here</Link></p>
    // </div>

    <div className="signup-container flex h-screen">
      <div className="signup-form flex-1 flex justify-center items-center bg-gray-100">
        <div className="w-80">
          <h2 className="text-2xl font-bold mb-2">Welcome To</h2>
          <h2 className="text-3xl font-bold text-center">
            Furni<span className="text-blue-500">Flex</span>
          </h2>
          <p className="mb-6 text-center">Signup for purchase your desired products</p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSignup}>
            <div className="mb-4 flex space-x-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name (optional)"
                className="w-1/2 px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name (optional)"
                className="w-1/2 px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms">
                I agree to the <Link to="/terms" className="text-blue-500">Terms & Policy</Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md"
            >
              Signup
            </button>
          </form>
          <div className="mt-6 text-center">or</div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleGoogleSignup}
              className="w-1/2 py-2 border rounded-md mr-2"
            >
              Sign up with Google
            </button>
            <button
              onClick={handleAppleSignup}
              className="w-1/2 py-2 border rounded-md"
            >
              Sign up with Apple
            </button>
          </div>
          <div className="mt-6 text-center">
            <p>Already have an account? <Link to="/login" className="text-blue-500">Sign In</Link></p>
          </div>
        </div>
      </div>
      <div
        className="signup-image flex-1 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/image/login-page.png')" }} // Replace with actual image path
      >
        <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-md">
          <h1 className="text-4xl font-bold mb-4">FurniFlex</h1>
          <p>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
