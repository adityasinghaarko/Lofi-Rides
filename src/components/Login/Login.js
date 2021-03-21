import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { Button, Container } from 'react-bootstrap';
import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isNewUser, setIsNewUser] = useState(false);
    let loginSuccess = '';

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const handleBlur = (event) => {
        let isFieldValid = true;
        // console.log(event.target.name ,event.target.value);
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
            // console.log(isEmailValid);
        }
        if (event.target.name === 'password') {
            isFieldValid = event.target.value.length > 6 && /\d{1}/.test(event.target.value);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);

        }
    }

    const handleSignUp = (event) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const newUserInfo = { ...user };
                    newUserInfo.error = errorMessage;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        console.log('submit clicked');
        event.preventDefault();
    }

    const handleSignIn = (event) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                // Signed in
                var { email, displayName, photoURL } = userCredential.user;
                setLoggedInUser({
                    name: displayName,
                    email: email,
                    photoURl: photoURL
                })

                const newUserInfo = { ...user };
                newUserInfo.error = '';
                setUser(newUserInfo);
                loginSuccess = 'Logged in successfully'
                history.replace(from);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        event.preventDefault();
    }

    // Google sign in -------->
    var provider = new firebase.auth.GoogleAuthProvider();
    const [googleLogInSuccess, setGoogleLogInSuccess] = useState(false)

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email, photoURL } = result.user;
                setLoggedInUser({
                    name: displayName,
                    email: email,
                    photoURl: photoURL
                })
                setGoogleLogInSuccess(true);
                history.replace(from);
                // ...
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage);
                // ...
            });
    }

    // <-------Google sign in


    return (
        <div className="login-page">
            <Container className="auth-form">
                <form>
                    {isNewUser ? <h1>Sign Up</h1> : <h1>Login</h1>}
                    {isNewUser && <input className="form-input" name="name" onBlur={handleBlur} type="text" placeholder="Your Name" required />}
                    <br />
                    <input className="form-input" name="email" onBlur={handleBlur} type="text" placeholder="Email" required />
                    <br />
                    <input className="form-input" name="password" onBlur={handleBlur} type="password" placeholder="Password" id="" required />
                    <br />
                    {isNewUser ? <input onClick={handleSignUp} type="Create account" value="Submit" /> : <input onClick={handleSignIn} type="submit" value="Login" />}
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>User created successfully.</p>}
                </form>

                {isNewUser ? <p>Allready have and account? <span onClick={() => setIsNewUser(false)} style={{ color: "orange", textDecoration: "underline" }}>Login</span></p>
                    :
                    <p>Dont have an account? <span onClick={() => setIsNewUser(true)} style={{ color: "orange", textDecoration: "underline" }}>Create account</span></p>
                }
            </Container>
            <Container>
                <p>________________________Or________________________</p>
                <button onClick={handleGoogleSignIn}>Continue with Google</button>
                {googleLogInSuccess && <p style={{ color: 'green' }}>Logined successfully</p>}
            </Container>
        </div>
    );
};

export default Login;