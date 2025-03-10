import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

import React from 'react'
import NavbarComponent from "./components/Navbar/Navbar.component";
import Footer from "./pages/Footer/Footer";

const Layout = () => {
    
    return (
        <Container fluid id="layout">
            <NavbarComponent/>
            <Outlet />
            <Footer />
        </Container>
    );
};

export default Layout;