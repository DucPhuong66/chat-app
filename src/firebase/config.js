import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZXfNd_mem1xiNoeUg8AzmJKjByqv4vIo",
  authDomain: "chat-app-50acf.firebaseapp.com",
  projectId: "chat-app-50acf",
  storageBucket: "chat-app-50acf.appspot.com",
  messagingSenderId: "973976810252",
  appId: "1:973976810252:web:34547fb1a7d6bf6fe10f29",
  measurementId: "G-VZZ1PPHWL1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const auth = firebase.auth()
const db = firebase.firestore()

export {db, auth} ;

export default firebase;