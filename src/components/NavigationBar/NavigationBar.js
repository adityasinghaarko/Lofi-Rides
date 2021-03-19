import { Button } from 'react-bootstrap';
import React from 'react';
import { Nav, Navbar  } from 'react-bootstrap';
import navHeader from '../../images/Urban Riders.png'
import './NavigationBar.css'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home"><img  src={navHeader} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home"><span id="home">Home</span></Nav.Link>
                    <Nav.Link href="/destination">Destination</Nav.Link>
                    <Nav.Link href="">Blog</Nav.Link>
                    <Nav.Link href="">Contact</Nav.Link>
                    <Button variant="warning"><Link to="/login">Login</Link></Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;