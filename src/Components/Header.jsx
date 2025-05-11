import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../assets/Logo.png';
const Header = () => {
  return (
    <div>
      <Navbar style={{height:'80px'}}  className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={img1}
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{' '}
         <span className='fw-bolder'>Students Record</span> 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header