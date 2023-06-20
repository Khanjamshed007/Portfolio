import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCn4h2zyj8CJl1nKQ7AkoEpemL9mPjC270",
  authDomain: "jamshed-portfolio.firebaseapp.com",
  projectId: "jamshed-portfolio",
  storageBucket: "jamshed-portfolio.appspot.com",
  messagingSenderId: "668634934388",
  appId: "1:668634934388:web:f53b96aa13fe36b2c37521"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore();