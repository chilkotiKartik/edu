// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9u1T4opvrSjXqNuMcqkYgV01QzlmM_p8",
  authDomain: "cairo-gyms-b75ca.firebaseapp.com",
  databaseURL: "https://cairo-gyms-b75ca-default-rtdb.firebaseio.com",
  projectId: "cairo-gyms-b75ca",
  storageBucket: "cairo-gyms-b75ca.firebasestorage.app",
  messagingSenderId: "423197874134",
  appId: "1:423197874134:web:9de929d7c6c6cf77af7677",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
