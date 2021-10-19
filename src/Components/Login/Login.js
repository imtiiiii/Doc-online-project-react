//this componenet is for login 
import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import userImg from '../../img/register1.png'
import loginImg from '../../img/login1.png';
const Login = () => {
    return (
        <>
            <h1 className="text-center">Please Login</h1>
            <Container className="my-5">
                <Row>
                    <Col lg={6}>
                        <div>
                            <img src={loginImg} alt="login" />
                        </div>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-center align-items-center">
                        <div className=" d-flex justify-content-start align-items-center">
                            <div className="d-flex justify-content-start  form-container ">
                                <Form className="shadow-lg px-5 rounded-3 bg-light mt-3 mb-3 py-5">
                                    {/* user icon */}
                                    <div className="w-100 d-flex justify-content-center align-items-center mb-5 mt-3">
                                        <img src={userImg} alt="user" className=" rounded-pill user-icon" />
                                    </div>
                                    {/* Emain input field start */}
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />

                                    </Form.Group>
                                    {/* Emain input field end */}
                                    {/* password input field */}
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    {/* checkbox */}
                                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Aleady Registered?" />
                    </Form.Group> */}
                                    <Button className="btn-theme-purple" type="submit">
                                        Login
                                    </Button>
                                </Form>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;