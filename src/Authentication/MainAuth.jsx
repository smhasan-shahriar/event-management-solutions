import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const MainAuth = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInSocial = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
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
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    },[])
    const myRef = {user, signUp, signIn, signInSocial, logOut, manageProfile, loading};
    return (
        <div>
            <AuthContext.Provider value = {myRef}>
             {children}
            </AuthContext.Provider>
        </div>
    );
};

export default MainAuth;