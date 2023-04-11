import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyA1lg4WDRKqWkq1FZfA-2sKhNCsICa00YU",
    authDomain: "united-coders-43225.firebaseapp.com",
    databaseURL: "https://united-coders-43225-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "united-coders-43225",
    storageBucket: "united-coders-43225.appspot.com",
    messagingSenderId: "718799718951",
    appId: "1:718799718951:web:2720db9cd0c5bd442d9c02"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}