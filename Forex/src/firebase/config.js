// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBvjOm4dhWMMOdYP_0uiaQAF-jvtH6W-n8",
  authDomain: "forexapp-748bb.firebaseapp.com",
  projectId: "forexapp-748bb",
  storageBucket: "forexapp-748bb.appspot.com",
  messagingSenderId: "543950423150",
  appId: "1:543950423150:web:cc25e225ad3334380bd27f",
  measurementId: "G-05CVG2VF1Q"
};
// Initialize Firebase



if (!firebase.apps.length) {
 // firebase.initializeApp(firebaseConfig);
 firebase.initializeApp(firebaseConfig);
}

export { firebase };
