import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { Container } from 'react-bootstrap';
import './Login.css';


const Login = () => {
    return (
        <Container>
            <form action="">
            <h1>Login</h1>
            <input type="text" placeholder="Email"/>
            <br/>
            <input type="password" name="" id=""/>
            </form>
        </Container>
    );
};

export default Login;