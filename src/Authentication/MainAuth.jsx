import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const MainAuth = ({children}) => {
    const [user, setUser] = useState([])
    const googleProvider = new GoogleAuthProvider()
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInSocial = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const manageProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: `${image}`
        })
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    },[])
    const myRef = {user, signUp, signIn, signInSocial, logOut, manageProfile};
    return (
        <div>
            <AuthContext.Provider value = {myRef}>
             {children}
            </AuthContext.Provider>
        </div>
    );
};

export default MainAuth;