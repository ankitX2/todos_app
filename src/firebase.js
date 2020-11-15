// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
   
//   };

import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBH_lKWFfQH1cniO7x_R-5BS7wLz3Sr5DU",
    authDomain: "todo-app-cp-8352e.firebaseapp.com",
    databaseURL: "https://todo-app-cp-8352e.firebaseio.com",
    projectId: "todo-app-cp-8352e",
    storageBucket: "todo-app-cp-8352e.appspot.com",
    messagingSenderId: "192283591000",
    appId: "1:192283591000:web:5119d6621d08608bc2252d",
    measurementId: "G-JZH5KN44BP"
});

const db= firebaseApp.firestore();


export default db;