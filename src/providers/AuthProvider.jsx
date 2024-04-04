import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";

export const AuthContex = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };


  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password )
  }

  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider);
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }


  //observve auth state change
  
  useEffect(() => {
   const unSuscribe =  onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(true)
      console.log('observing current user inside useeffect of auth provider ', currentUser);
    })
    return () => {
      unSuscribe();
    }
  }, [])

  const authInfo = {
     user,
     loading,
      createUser,
       signInUser,
       signInWithGoogle,
       logOut
       };

  return <AuthContex.Provider value={authInfo}>
    {children}
    </AuthContex.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

/**
 * 1. Create context and export it
 * 2. set provider with value
 * 3. use the auth provider in the main.jsx file
 * 4. access children in the auth provider component as children and use it
 * in the middle of the provider
 *
 * **/
