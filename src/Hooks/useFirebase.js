import React, { useEffect, useState } from 'react';
import initFirebase from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useHistory } from 'react-router';
initFirebase();
const useFirebase = () => {
    let history = useHistory();
    // we will store the user in a state
    const [user, setUser] = useState(null);
    //keeping a status to show the user if registration was succesfull or not
    const [regStutus, setRegStutus] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // create account with email and password
    const CreateAccountWithEmailPass = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setIsLoading(true);
                setUser(result.user);
                setRegStutus("Successful");
                setIsLoading(false);
            })
            .catch((error) => {
                if (isLoading === false)
                    setRegStutus("error");

            });
    }
    // this fucntion for= login with email and password
    const loginWithEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setIsLoading(true);
                setRegStutus("wait");
                setUser(result.user);
                setRegStutus("Login Successfull");
                setIsLoading(false);
            })
            .catch((error) => {
                if (!isLoading)
                    setRegStutus("Error try again");

            });
    }
    // fucntion for google sign in 
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setIsLoading(true);
                setRegStutus("wait");
                setUser(result.user);
                setRegStutus("Login Successfull");
                setIsLoading(false);
            }).catch((error) => {
                if (!isLoading)
                    setRegStutus("Error try again");
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setIsLoading(true);
                setRegStutus("wait");
                setUser(user);
                setRegStutus("Login Successfull");
                setIsLoading(false);
            } else {
                setUser(null);
            }
        });
    }, [])
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setRegStutus("logout succesfull");
            setUser(null);
        }).catch((error) => {
            setRegStutus(error.message)
        });

    }
    return {
        user,
        loginWithEmailPass,
        CreateAccountWithEmailPass,
        googleLogin,
        regStutus,
        handleLogout,
        isLoading
    }

}
export default useFirebase;