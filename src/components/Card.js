import React,{ useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useFirebase } from "../context/Firebase";

const BookCard = (props) => {

const firebase=useFirebase();
const navigate=useNavigate();

    const[url,setURL]=useState("");

    useEffect (()=> {
        firebase.getImageURL(props.imageURL).then((url) => setURL(url));
    },[]);



    return (
        <Card style={{ width: '18rem' ,argin:"25px" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
         This book Has a title { props.name} and this book sold by {props.displayName} and the book costs is {props.price}
        </Card.Text>
        <Button onClick={(e) => navigate(props.link)} variant="primary">View</Button>
      </Card.Body>
    </Card>
    );
};

export  default BookCard;