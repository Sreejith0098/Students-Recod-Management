import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const StudentForm = () => {
  return (
    <>

<div style={{display:'flex',justifyContent:'center',alignItems:'center', height:'73vh'}}>
    <span style={{fontSize:'30px'}}>Add students</span>{" "}
    <button className='btn rounded-5 bg-secondary'> &#43;</button>
</div>
    </>
  )
}

export default StudentForm