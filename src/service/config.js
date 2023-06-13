import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "entrega--tp--final.firebaseapp.com",
  projectId: "entrega--tp--final",
  storageBucket: "entrega--tp--final.appspot.com",
  messagingSenderId: "1047029243139",
  appId: "1:1047029243139:web:3649230fec18f45fa81d36"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);