import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app  from '../../firebase/firebaseConfig';






export const AuthContext =createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const  AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn = () =>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider);
    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
      return signOut(auth);

    }
    const authinfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleSignIn

    }
    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return () =>{
           return unSubscribe();
        }
    })


    return (
        <AuthContext.Provider value={authinfo}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          
          children
        )}
      </AuthContext.Provider>
    );
};

export default AuthProvider;