import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Config/Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // google log in
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    setUser,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
