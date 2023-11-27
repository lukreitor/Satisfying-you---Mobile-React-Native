// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJg3w6JhKrpD4Hd5I0yYQtRScsP6WQCVk",
  authDomain: "myhealth-as65d-26cc6.firebaseapp.com",
  projectId: "myhealth-as65d-26cc6",
  storageBucket: "myhealth-as65d-26cc6.appspot.com",
  messagingSenderId: "735383124194",
  appId: "1:735383124194:web:0080614d2197e968f606bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth_mod = getAuth(app);
const storage = getStorage(app)

export { auth_mod , storage }

export default app