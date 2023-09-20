// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOhyOjzcID9uirHfJd7hwbiBfi0a0xz44",
  authDomain: "clone-29c22.firebaseapp.com",
  projectId: "clone-29c22",
  storageBucket: "clone-29c22.appspot.com",
  messagingSenderId: "877583474242",
  appId: "1:877583474242:web:a25fbda88ed151e57a97db",
  measurementId: "G-72B353HD9F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };