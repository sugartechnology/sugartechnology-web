import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
 
    apiKey: "AIzaSyAl1rLtBJ9uCmMHl0Vwxc7IuEQzSvlGcvI",
    authDomain: "sugartechtest.firebaseapp.com",
    projectId: "sugartechtest",
    storageBucket: "sugartechtest.appspot.com",
    messagingSenderId: "60289635049",
    appId: "1:60289635049:web:9c7bb0bb4e1115fd199678",
    measurementId: "G-D4GJET5QE0"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();