import { Button, NavLink } from 'react-bootstrap';
import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { Nav, Navbar  } from 'react-bootstrap';
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const NavigationBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogOut = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser({
                name: '',
                email: '',
              });
          }).catch((error) => {
            console.log(error);
          });
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand to="/home"><h1>Lofi Rides</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink><Link to="/home"><span id="home">Home</span></Link></NavLink>
                    <NavLink><Link to="/destination/all">Destination</Link></NavLink>
                    <NavLink><Link to="">Blog</Link></NavLink>
                    <NavLink><Link to="">Contact</Link></NavLink>
                    {loggedInUser.email ? <Button onClick={handleLogOut} variant="warning"><Link to="/login">Log out</Link></Button>
                    :
                    <Button variant="warning"><Link to="/login">Login</Link></Button>
                    }
                    <NavLink>{loggedInUser.name}</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;