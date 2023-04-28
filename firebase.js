import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJO4Kv8iYw0WuMqQmVSiY8_azgJaIcusk",
  authDomain: "booking-project-3bb9d.firebaseapp.com",
  projectId: "booking-project-3bb9d",
  storageBucket: "booking-project-3bb9d.appspot.com",
  messagingSenderId: "985880521192",
  appId: "1:985880521192:web:fe4b068b1e8e66e82c5c5d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
