import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyByxf6BKp0gbeNLnWpwJa3AQSnA8Aw7Ojg",
  authDomain: "assignment-clone-ae30b.firebaseapp.com",
  projectId: "assignment-clone-ae30b",
  storageBucket: "assignment-clone-ae30b.appspot.com",
  messagingSenderId: "252788421577",
  appId: "1:252788421577:web:42a72f4bb2afdac37bee18"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
