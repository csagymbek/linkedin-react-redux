import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCyxPuZCa7z4Y2NOVpzvFkqh7xbU4JXOw",
  authDomain: "linkedin-react-redux.firebaseapp.com",
  projectId: "linkedin-react-redux",
  storageBucket: "linkedin-react-redux.appspot.com",
  messagingSenderId: "118907966148",
  appId: "1:118907966148:web:cfd4ef1282a4cec86daf91",
  measurementId: "G-9RHXEFJ2ED",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebaseApp.firestore();
export const auth = firebase.auth();
