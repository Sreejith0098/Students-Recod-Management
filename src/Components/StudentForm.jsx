import React from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const StudentForm = () => {


  
  return (
    <>
    <div style={{height:'250px',marginTop:'100px'}} className="container w-50 border border-1 rounded p-3 "  >
      <h3 className="pb-2">Upload Student Details</h3>
    <FloatingLabel 
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <button  className="btn border btn-primary ">Submit</button> 
      </div>
    </>
  );
};

export default StudentForm;
