// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.NextApikey,
  authDomain: import.meta.env.NextAuthdomain,
  projectId: import.meta.env.NextProjectid,
  storageBucket: import.meta.env.NextStoragebucket,
  messagingSenderId: import.meta.env.NextMessagingsenderid,
  appId: import.meta.env.NextAppid,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
