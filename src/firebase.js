
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCXnrR0FA0CcVMorYyOb3kJhgGglAzLnSg",
  authDomain: "disneyplus-clone-cbc0b.firebaseapp.com",
  projectId: "disneyplus-clone-cbc0b",
  storageBucket: "disneyplus-clone-cbc0b.appspot.com",
  messagingSenderId: "128503792553",
  appId: "1:128503792553:web:cb0a55cefd276bafedbab8",
  measurementId: "G-1XM952ERNG"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;