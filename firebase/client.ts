// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlwfDkIHPvHUhO07wyHJ_s_UTCdd8g9mU",
    authDomain: "mockmate-20908.firebaseapp.com",
    projectId: "mockmate-20908",
    storageBucket: "mockmate-20908.firebasestorage.app",
    messagingSenderId: "436866693906",
    appId: "1:436866693906:web:4d1082c4eac954cecfd1cb",
    measurementId: "G-F5HTFKPHL7"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db=getFirestore(app);