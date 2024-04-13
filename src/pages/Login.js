import React, {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom" ;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useFirebase } from "../context/Firebase";
// import { useState } from 'react';


const LoginPage = () => {

    const  firebase = useFirebase();
    const navigate =useNavigate();

    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');

    useEffect(() =>{
        if(firebase.isLoggedIn){
            //navigate to home page
            navigate("/home");
        }
    },[firebase,navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('login user...');
      const result =  await firebase.signinWithEmailAndPassword(email,password);
        console.log('success',result);
    };

    return (
        <div className="container mt-5 ">
             <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
      </Form.Group>
    <span className="mt-5">
    <Button variant="primary" type="submit">
        Login Account
      </Button>
        <Button onClick={firebase.signinWithGoogle} variant="danger">Signin With Google</Button>
    </span>
    
    
    </Form>
   
        </div>
    );
};

export default LoginPage;