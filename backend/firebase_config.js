// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkuVI2_-3BergF2OHvWKmJDa_jwWnCCVM",
  authDomain: "cadastrologin-react-native.firebaseapp.com",
  projectId: "cadastrologin-react-native",
  storageBucket: "cadastrologin-react-native.firebasestorage.app",
  messagingSenderId: "1096059262826",
  appId: "1:1096059262826:web:6a63180923ef45bd06f713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth (app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export {app, auth, signInWithEmailAndPassword};
