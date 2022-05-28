import React from "react";
import Mainpage from "./components/mainpage/mainpage";
import SideBar from "./components/sidebar/sidebar";
import Topnav from "./components/topnav/topnav";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCi5c9Gs9H-jtd5PU0gPCuoSnR-stVpNFU",
    authDomain: "bowl-purchase-app.firebaseapp.com",
    projectId: "bowl-purchase-app",
    storageBucket: "bowl-purchase-app.appspot.com",
    messagingSenderId: "928562948416",
    appId: "1:928562948416:web:5ecb9c42ff823645fe72a5",
    measurementId: "G-N4VPHWPZDP",
  });
} else {
  firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function All() {
  return (
    <div>
      <SideBar />
      <Topnav />
      <Mainpage />
    </div>
  );
}

function App() {
  const [user] = useAuthState(auth);
  return <div className="flex">{user ? <All /> : <SignIn />}</div>;
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <div className="signin">
        <>
          <div className="anmeldung">
            <button className="sign-in" onClick={signInWithGoogle}>
              Sign in with Google
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

export default App;
