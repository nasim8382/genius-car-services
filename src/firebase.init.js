// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLJJgQGq6mrGuz5ttmz9vEadI1YUnpXXs",
  authDomain: "genius-car-services-3e0fb.firebaseapp.com",
  projectId: "genius-car-services-3e0fb",
  storageBucket: "genius-car-services-3e0fb.appspot.com",
  messagingSenderId: "640008249158",
  appId: "1:640008249158:web:0e30067597b83de2fb8f47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;