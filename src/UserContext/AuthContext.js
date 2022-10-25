import React,{ createContext }  from 'react';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app)

export const AuthUserContext = createContext();

const AuthContext = ({children}) => {

    const loginWithEmail = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const UserAuth = {
        displayname:'MK',
        loginWithEmail
    }
    const authInfo = {UserAuth}

    return (
        <AuthUserContext.Provider value={authInfo}>
            {children}
        </AuthUserContext.Provider>
    );
  
};

export default AuthContext;