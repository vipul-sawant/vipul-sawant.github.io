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
                {/* <Nav className="me-auto"> */}
                <Nav className="d-flex align-items-center justiy-content-center">
                    {/* <Nav.Link as={"div"}> <NavLink className={({isActive})=>{console.log("isActive :", isActive); return (`menu-link ${isActive?"active":""}`)}}  to={'/'}> Home </NavLink> </Nav.Link>
                    <Nav.Link as={"div"}> <NavLink className={({isActive})=>{console.log("isActive :", isActive); return (`menu-link ${isActive?"active":""}`)}}  to={'/about'}> About </NavLink> </Nav.Link>
                    <Nav.Link as={"div"}> <NavLink className={({isActive})=>{console.log("isActive :", isActive); return (`menu-link ${isActive?"active":""}`)}}  to={'/projects'}> Projects </NavLink> </Nav.Link>
                    <Nav.Link as={"div"}> <NavLink className={({isActive})=>{console.log("isActive :", isActive); return (`menu-link ${isActive?"active":""}`)}}  to={'/education'}> Education </NavLink> </Nav.Link> */}
                    <Nav.Link as={NavLink} to={'/'} className={({isActive})=>{console.log("Home isActive :", isActive); return (`menu-link ${isActive?"active":""}`)}}> Home </Nav.Link>

                    <Nav.Link as={NavLink} to={'/about'} className={({isActive})=>{console.log("About isActive :", isActive); return (`menu-link ${isActive?"active":""}`)}}> About </Nav.Link>

                    <Nav.Link as={NavLink} to={'/projects'} className={({isActive})=>{console.log("Projects isActive :", isActive); return (`menu-link ${isActive?"active":""}`)}}> Projects </Nav.Link>

                    <Nav.Link as={NavLink} to={'/education'} className={({isActive})=>{console.log("Education isActive :", isActive); return (`menu-link ${isActive?"active":""}`)}}> Education </Nav.Link>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavbarComponent