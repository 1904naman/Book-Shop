import React,{ useState } from "react";
import Accordion from 'react-bootstrap/Accordion';



const HelpPage = () => {
 
    return (
      <>
      <div>
      <h1 className="mt-3 ms-5">FAQs</h1>
      </div>
      <div className="mt-5 logOutUserButton">
      <Accordion defaultActiveKey={['0']} alwaysOpen>
          <div className="ms-5 me-5">
      <Accordion.Item eventKey="0">
       
        
        <Accordion.Header>What is LNMIIT LT-Booking System?</Accordion.Header>
        <Accordion.Body>
        LNMIIT LT-Booking is a system for the entire institute to view occupancy details of
various venues (mainly classrooms ,labs and seminar halls) and offers a facility to authorized users
to book a venue.
        </Accordion.Body>
        
      </Accordion.Item>
    
      <Accordion.Item eventKey="1">
        
        <Accordion.Header>How can you book a LTs?</Accordion.Header>
        <Accordion.Body>
          Firstly,you have to identified the free slot is available or not .Free slot is available in white in color 
        </Accordion.Body>
       
      </Accordion.Item>
      
      <Accordion.Item eventKey="2">
        <Accordion.Header>what are the Rules and Regulation to book an LTs?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Which rooms are currently being handled by LNMIIT LT-Booking System?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>I have some suggestions regarding LNMITT LT-Booking System.</Accordion.Header>
        <Accordion.Body>
        Yes. Click on feedback to get the feedback form, post login, at extreme right
side. This feedback form is to enable suggestions, problem reports, feature ideas,
and general comments.
        </Accordion.Body>
      </Accordion.Item>
      </div>
    </Accordion>
    </div>
 </>
      );

};

export default HelpPage;