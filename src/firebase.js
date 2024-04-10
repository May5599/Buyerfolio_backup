
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {

  
    apiKey: "AIzaSyB7hdVeYtHjPIzIuiBU-4vh8MQVJx95ods",
    authDomain: "redux-818a3.firebaseapp.com",
    projectId: "redux-818a3",
    storageBucket: "redux-818a3.appspot.com",
    messagingSenderId: "836488275809",
    appId: "1:836488275809:web:01784e61bae1f99385c720",
    measurementId: "G-KXBKFGGP2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
