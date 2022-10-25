import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app)

export const AuthUserContext = createContext();

const AuthContext = ({ children }) => {

    const [loggedUser, setLoggedUser] = useState({});

    // Log In With Email password 
    const loginWithEmail = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // get user logged in or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            const uid = loggedUser.uid
            setLoggedUser(loggedUser)
        })

        return () => {
            unsubscribe();
        }
    }, [])

     // SignOut

     const logOut = () => {
        setLoggedUser({})
        return signOut(auth)

    }


    const UserAuth = {
        displayname: 'MK',
        loginWithEmail,
        loggedUser,
        logOut
    }
    const authInfo = { UserAuth }

    return (
        <AuthUserContext.Provider value={authInfo}>
            {children}
        </AuthUserContext.Provider>
    );

};

export default AuthContext;