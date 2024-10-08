// // AuthContext.js
// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // Loading while checking storage

//   useEffect(() => {
//     const savedUser = localStorage.getItem('user');
//     if (savedUser) {
//       setUser(JSON.parse(savedUser)); // Restore user from localStorage
//     }
//     setLoading(false); // Finished loading
//   }, []);

//   const login = (credentials) => {
//     const fakeUser = { username: credentials.username };
//     setUser(fakeUser);
//     localStorage.setItem('user', JSON.stringify(fakeUser)); // Save user to localStorage
//   };


//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user'); // Clear localStorage
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};