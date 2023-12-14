import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app  from '../../firebase/firebaseConfig';






export const AuthContext =createContext();
const auth = getAuth(app);

const  AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
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
        logOut

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