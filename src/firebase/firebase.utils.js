import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyD7yopOqXumWkgbVsSqX5TzVqIZf2-PkfM",
    authDomain: "e-commerce-project-db-7470c.firebaseapp.com",
    projectId: "e-commerce-project-db-7470c",
    storageBucket: "e-commerce-project-db-7470c.appspot.com",
    messagingSenderId: "986906332496",
    appId: "1:986906332496:web:d3bc02f81300f88a027055",
    measurementId: "G-XZCFW55W38"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;