// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtkWQ-qv5nwN6UW7VT0XPRlkvUpQW0Jc4",
  authDomain: "first15-61746.firebaseapp.com",
  projectId: "first15-61746",
  storageBucket: "first15-61746.firebasestorage.app",
  messagingSenderId: "863193416249",
  appId: "1:863193416249:web:33e74861fe4525086b83e8",
  measurementId: "G-V7BYL3E21W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
