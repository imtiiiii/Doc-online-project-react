// this component will be added in header component.
//this component will have the navbar of this page
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth'
const Navigation = () => {
    const { user, hadnleLogout } = useAuth();
    console.log(user?.email);
    return (
        <Navbar className="nav-bar" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/home">
                    Doconline <br />
                    Consult
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/faq">FAQ</Nav.Link>
                    <Nav.Link as={HashLink} to="/articles">Articles</Nav.Link>
                    {
                        user ?
                            <Nav.Link as={HashLink} to="/login" onClick={hadnleLogout}>Logout => {user?.email}</Nav.Link>
                            :

                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>

                    }

                </Nav>
            </Container>
        </Navbar >
    );
};

export default Navigation;