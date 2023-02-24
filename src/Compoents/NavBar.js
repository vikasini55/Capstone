import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Styles/NavBar.css'

const NavBar = () => {
    return (
        <Navbar className="Nav-toggler">
        <Container>
          <Navbar.Brand as ={Link} to ="/" className="Navlogo">TOP JOBS</Navbar.Brand>
          <Nav className="Nav-items">
            <Nav.Link as ={Link} to ="/" className="Navbar-links">HOME</Nav.Link>
            <Nav.Link as ={Link} to ="/contact" className="Navbar-links">CONTACT US</Nav.Link>
            <Nav.Link as ={Link} to ="/jobs" className="Navbar-links">JOBS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    )
}

export default NavBar;