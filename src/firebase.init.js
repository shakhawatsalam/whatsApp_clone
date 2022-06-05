// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQWv90BVKe-DY3JPj2eJQcJ27lgvAhFtw",
    authDomain: "whatapp-clone-8d5f0.firebaseapp.com",
    projectId: "whatapp-clone-8d5f0",
    storageBucket: "whatapp-clone-8d5f0.appspot.com",
    messagingSenderId: "923996007722",
    appId: "1:923996007722:web:8820c5b1f5cdf3c4728253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;