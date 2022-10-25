import React, { createContext, useEffect, useState } from 'react';
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup, 
    GithubAuthProvider, 
    createUserWithEmailAndPassword,
    updateProfile   
} from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app)

export const AuthUserContext = createContext();

const AuthContext = ({ children }) => {

    const [loggedUser, setLoggedUser] = useState({});

    // Create User with Email and pass
    const createUserEmainPass = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    // Update Profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }


    // Log In With Email password 
    const loginWithEmail = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // Google Log In 
    const googleProvider = new GoogleAuthProvider();
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // Github Log in
    const githubProvider = new GithubAuthProvider();
    const githubLogIn = () => {
        return signInWithPopup(auth, githubProvider)
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
        logOut,
        googleLogIn,
        githubLogIn,
        createUserEmainPass,
        updateUserProfile
    }
    const authInfo = { UserAuth }

    return (
        <AuthUserContext.Provider value={authInfo}>
            {children}
        </AuthUserContext.Provider>
    );

};

export default AuthContext;