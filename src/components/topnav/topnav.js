import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import useDarkMode from "../../hooks/useDarkMode";

import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyBAw7IcdM3DXY0YTR-qLa9ZigCmFSCWaeM",
  authDomain: "react-projekt-1.firebaseapp.com",
  projectId: "react-projekt-1",
  storageBucket: "react-projekt-1.appspot.com",
  messagingSenderId: "403975538884",
  appId: "1:403975538884:web:42de82ac30e1f834e4a191",
  measurementId: "G-5L51QH5CE3",
});

const auth = firebase.auth();

const SignOut = () => {
  return (
    auth.currentUser && (
      <button className="signout" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};

const TopNavigation = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="top-navigation">
      <Username username={user.displayName} />
      <h1 className="welcometext">Welcome to Felix's Bowl purchase Service</h1>
      <ThemeIcon />

      <SignOut />
      <UserCircle url={user.photoURL} />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};
const Username = (props2) => (
  <div className="username">
    <h5>Welcome: {props2.username}</h5>
  </div>
);

const UserCircle = (props) => (
  <div>
    <img
      src={props.url}
      alt="https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
      className="userpicture"
    ></img>
  </div>
);

export default TopNavigation;
