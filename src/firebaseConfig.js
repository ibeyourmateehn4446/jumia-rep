import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgI9qL4XVx8Ld6t89jmubYK3Rytc-nPY0",
  authDomain: "jumia-clone-d9ecf.firebaseapp.com",
  projectId: "jumia-clone-d9ecf",
  storageBucket: "jumia-clone-d9ecf.appspot.com",
  messagingSenderId: "106647522963",
  appId: "1:106647522963:web:8b37cfb8a964a0b40ac766",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
