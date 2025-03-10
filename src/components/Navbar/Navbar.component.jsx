import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

import { Link, NavLink } from 'react-router-dom';

import "./Navbar.component.css";

const NavbarComponent = () => {
    return (

        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" id='navbar'>
            <Container>
                <NavbarBrand as={Link} to={'/'} id='navbar-brand' >My Portfolio</NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                 <Nav.Link as={NavLink} to={'/'}
                    > Home </Nav.Link>
                    <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                    <Nav.Link as={Link} to={'/projects'}>Projects</Nav.Link>
                    <Nav.Link as={Link} to={'/education'}>Education</Nav.Link>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavbarComponent