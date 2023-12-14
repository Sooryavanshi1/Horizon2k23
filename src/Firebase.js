// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import {getFirestore} from "firebase/firestore"
import {initializeApp} from "firebase/app"
import {getStorage} from 'firebase/storage'

//   var firebaseApp = firebase.initializeApp({
  
//     apiKey: "AIzaSyC7fxZd5Cq1Y6d0bxfJ1s6UxRRofXa-WqM",
//     authDomain: "horizon2k23-b974d.firebaseapp.com",
//     projectId: "horizon2k23-b974d",
//     storageBucket: "horizon2k23-b974d.appspot.com",
//     messagingSenderId: "356084335250",
//     appId: "1:356084335250:web:2871795f484008379a1c4b",
//     measurementId: "G-E330VQ9PN4"
 
// });
// var db = firebaseApp.firestore;
// export { db };
const firebaseConfig = {
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  apiKey: "AIzaSyC7fxZd5Cq1Y6d0bxfJ1s6UxRRofXa-WqM",
    authDomain: "horizon2k23-b974d.firebaseapp.com",
    projectId: "horizon2k23-b974d",
    storageBucket: "horizon2k23-b974d.appspot.com",
    messagingSenderId: "356084335250",
    appId: "1:356084335250:web:2871795f484008379a1c4b",
    measurementId: "G-E330VQ9PN4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
// export { db };