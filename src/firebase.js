// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0LOlaKhwiSp9Y-hZAHQ7W-qy98BlrKZ4",
  authDomain: "netflix-clone-46e05.firebaseapp.com",
  projectId: "netflix-clone-46e05",
  storageBucket: "netflix-clone-46e05.appspot.com",
  messagingSenderId: "494711172201",
  appId: "1:494711172201:web:eca849185b4325705a46f8",
  measurementId: "G-0SWW2JH6FQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth, db };