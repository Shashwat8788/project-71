import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDHUxBsTfXMxMRkr59vXoSJDDLkRCUszZc",
    authDomain: "e-ride-7eee1.firebaseapp.com",
    projectId: "e-ride-7eee1",
    storageBucket: "e-ride-7eee1.appspot.com",
    messagingSenderId: "177735191211",
    appId: "1:177735191211:web:df72ef076217e68b8f45ee"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
