// this component will be added in header component.
//this component will have the navbar of this page
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
import { HashLink } from 'react-router-hash-link';
const Navigation = () => {
    return (
        <Navbar className="nav-bar" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    Doconline <br />
                    Consult
                </Navbar.Brand>
                <Nav className="ms-auto">
                    {/* --------------- I have to fix nav href links..  delete this comment after fixing */}
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#features">Features</Nav.Link>
                    <Nav.Link as={HashLink} to="/faq">FAQ</Nav.Link>
                    <Nav.Link as={HashLink} to="/articles">Articles</Nav.Link>
                    {/* login logout have to be dynamic. fixing left. delete this comment after fixing */}
                    <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar >
    );
};

export default Navigation;