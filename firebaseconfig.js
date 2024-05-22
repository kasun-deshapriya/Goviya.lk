// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7hZYoVaMZvNAbXGteL7JA1um7grrefFY",
  authDomain: "goviya-lk-a5428.firebaseapp.com",
  projectId: "goviya-lk-a5428",
  storageBucket: "goviya-lk-a5428.appspot.com",
  messagingSenderId: "905014082285",
  appId: "1:905014082285:web:c13243e81d545deaa86ae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };