// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACJceJxMHvy-Yw7sGO1Z9rYjLf_Cof2BA",
    authDomain: "elysium-5dc18.firebaseapp.com",
    projectId: "elysium-5dc18",
    storageBucket: "elysium-5dc18.appspot.com",
    messagingSenderId: "177816517773",
    appId: "1:177816517773:web:91c34997db0e90f37336c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;