import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDzLy1yhi-ZJ8VWiDbQCqB9R6-3nUY_WE4",
    authDomain: "kutubxona-ilovasi-uchun.firebaseapp.com",
    projectId: "kutubxona-ilovasi-uchun",
    storageBucket: "kutubxona-ilovasi-uchun.appspot.com",
    messagingSenderId: "390013979523",
    appId: "1:390013979523:web:62eb68604808c49a2204b6"
};


const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);