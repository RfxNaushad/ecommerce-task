import "firebase/auth";
import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, GoogleAuthProvider, OAuthProvider, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaApOF7vU3TIA2Ubl5F5asY38is8bIsOM",
  authDomain: "task-cc43c.firebaseapp.com",
  projectId: "task-cc43c",
  storageBucket: "task-cc43c.appspot.com",
  messagingSenderId: "346071910016",
  ppId: "1346071910016:web:0a8c50a37bb13fa3f24865",
  measurementId: "G-V5S75BR73T",
  // authDomain:process.env.authDomain,
  // projectId: process.env.projectId,
  // storageBucket: process.env.storageBucket,
  // messagingSenderId: process.env.messagingSenderId,
  // appId: process.env.appId,
  // measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

export { auth, googleProvider, appleProvider };
