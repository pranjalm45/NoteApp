import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZYvnVmdVALLLtI74c2gviDsTIu6O34Qo",
  authDomain: "login-d3211.firebaseapp.com",
  databaseURL: "https://login-d3211-default-rtdb.firebaseio.com",
  projectId: "login-d3211",
  storageBucket: "login-d3211.appspot.com",
  messagingSenderId: "464010257009",
  appId: "1:464010257009:web:42e35a730bd0f0d0b631d0",
  measurementId: "G-FWVX0KWXDE",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
