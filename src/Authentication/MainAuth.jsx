import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const MainAuth = ({children}) => {
    const [user, setUser] = useState([])
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    },[])
    const myRef = {user, signUp, singIn, logOut};
    return (
        <div>
            <AuthContext.Provider value = {myRef}>
             {children}
            </AuthContext.Provider>
        </div>
    );
};

export default MainAuth;