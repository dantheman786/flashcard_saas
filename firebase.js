// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpm3N4pkABzO6Tv1_UhTA9p0ClSbItlEE",
  authDomain: "flashcards-saas-85bca.firebaseapp.com",
  projectId: "flashcards-saas-85bca",
  storageBucket: "flashcards-saas-85bca.appspot.com",
  messagingSenderId: "594581649021",
  appId: "1:594581649021:web:e7311e567f6c2fe535e314",
  measurementId: "G-1EDGEZXP89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
const analytics = getAnalytics(app);