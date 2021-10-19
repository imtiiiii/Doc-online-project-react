import React, { useEffect, useState } from 'react';
import initFirebase from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useHistory } from 'react-router';
initFirebase();
const useFirebase = () => {
    let history = useHistory();
    // we will store the user in a state
    const [user, setUser] = useState(null);
    //keeping a status to show the user if registration was succesfull or not
    const [regStutus, setRegStutus] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // create account with email and password
    const CreateAccountWithEmailPass = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setRegStutus("Login Successfull");
            })
            .catch((error) => {
                setRegStutus("There was some error! Please try again");

            });
    }
    // this fucntion for= login with email and password
    const loginWithEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {

            });
    }
    // fucntion for google sign in 
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setRegStutus("Login Successfull");
            }).catch((error) => {
                setRegStutus("Wait");
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
                // ...
            } else {
                setUser(null);
            }
        });
    }, [])

    return {
        user,
        loginWithEmailPass,
        CreateAccountWithEmailPass,
        googleLogin,
        regStutus
    }

}
export default useFirebase;