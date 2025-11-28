import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Navigation() {
    return (
        <>
      
  <br/>

          <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">YouChef</Navbar.Brand>
          <Nav>
             <Nav.Link> <button class="btn btn-info"><Link to='/addnew'>Add new</Link></button> </Nav.Link>
           
           
            <Nav.Link href="#features">View all</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
        </>
    
    )
}



export default Navigation
