// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { EmailAuthProvider, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendPasswordResetEmail, sendEmailVerification, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlI-VSS9y5JWq_UGl4wnPEnOnIVz7axxE",
  authDomain: "budgetzuluapp.firebaseapp.com",
  projectId: "budgetzuluapp",
  storageBucket: "budgetzuluapp.appspot.com",
  messagingSenderId: "803640964192",
  appId: "1:803640964192:web:78427e77572deb5ee0bf05",
  measurementId: "G-WV4XTR1192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

const auth = getAuth();
 
export async function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}