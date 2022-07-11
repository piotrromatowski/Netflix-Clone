// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCJMqtII7c5Ho9SturamiNXYRbdDkkjjaU",
//   authDomain: "netflix-clone-66ac6.firebaseapp.com",
//   projectId: "netflix-clone-66ac6",
//   storageBucket: "netflix-clone-66ac6.appspot.com",
//   messagingSenderId: "725574182827",
//   appId: "1:725574182827:web:639b162f612b1ee02fd4ee"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJMqtII7c5Ho9SturamiNXYRbdDkkjjaU",
    authDomain: "netflix-clone-66ac6.firebaseapp.com",
    projectId: "netflix-clone-66ac6",
    storageBucket: "netflix-clone-66ac6.appspot.com",
    messagingSenderId: "725574182827",
    appId: "1:725574182827:web:639b162f612b1ee02fd4ee"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }