import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzoB4wF9k64YQnS1amdLrcKFHlDQZSOBA",
  authDomain: "crwn-clothing-db-d4308.firebaseapp.com",
  projectId: "crwn-clothing-db-d4308",
  storageBucket: "crwn-clothing-db-d4308.appspot.com",
  messagingSenderId: "127433428575",
  appId: "1:127433428575:web:74a7897405f0a128c215ea",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user ", error.message);
    }
  }
  return userDocRef;

  // if user data doesn't exit ->create /set the doc with the data from userAuth in my Collection

  //   check if userdata exit
  // return userDocRef
};
