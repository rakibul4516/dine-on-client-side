import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";
import axios from "axios";
// import AxiosData from "../Axios/AxiosData";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    // const axios = AxiosData()
    const [users, setUsers] = useState()
    const [loading, setLoading] = useState(true)

    //Sign Up users
    const signupUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Sign In users
    const signinUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //Sign in with google
    const signinWithGoogle = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    const signoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            const userEmail = user?.email || users?.email;
            const loggedUser = { email: userEmail };
            setUsers(user)
            setLoading(false)

            // if user exists then issue a token
            if (user) {
                axios.post('https://dine-on-server.vercel.app/api/v1/jwt', loggedUser,{withCredentials:true})
                    .then(res => {
                        console.log('token response', res.data)
                    })
            }
            else {
                axios.post('https://dine-on-server.vercel.app/api/v1/logout', loggedUser,{withCredentials:true})
                .then(res => {
                    console.log('logout',res.data)
                })
            }
            return () => {
                unSubscribe()
            }
        })
    }, [users?.email])


    const authInfo = {
        users,
        loading,
        signupUser,
        signinUser,
        signinWithGoogle,
        signoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthProvider;

