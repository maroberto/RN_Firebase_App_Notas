import * as firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbJtAJXDeAppZmrlbrJUdCrlv2JrY3Xt8",
  authDomain: "task-e6187.firebaseapp.com",
  projectId: "task-e6187",
  storageBucket: "task-e6187.appspot.com",
  messagingSenderId: "449720104045",
  appId: "1:449720104045:web:ff4a0a02b57119effffb64"
};

//TODO: Inicializa Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();
