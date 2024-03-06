import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnSlKVr6RE8YaYnWvxLvuZBfnEkDmPdNA",
  authDomain: "sass-translation-clone.firebaseapp.com",
  projectId: "sass-translation-clone",
  storageBucket: "sass-translation-clone.appspot.com",
  messagingSenderId: "950483205611",
  appId: "1:950483205611:web:c54b9f564e642002c1adae",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
