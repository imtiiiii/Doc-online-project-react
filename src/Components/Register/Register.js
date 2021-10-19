// this component will be used for registration form 
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Register.css';
import userImg from '../../img/register1.png'
import loginImg from '../../img/login1.png';
const Register = () => {
    return (
        <>
            <Container className="my-5 form-container bg-light">
                <h1 className="text-center my-4 ">Register </h1>
                <Row>
                    <Col lg={6} className="d-lg-flex align-items-center d-none  ">
                        {/* left side image */}
                        <div className="d-flex justify-content-center  ">
                            <img src={loginImg} alt="login" className="w-50" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        {/* reg */}
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="d-flex justify-content-center align-items-center form-container ">
                                <Form className="shadow-sm px-5 rounded-3 bg-light mt-5 mb-3 py-5">
                                    {/* user icon */}
                                    <div className="w-25 mx-auto d-flex justify-content-center align-items-center mb-5 mt-3">
                                        <img src={userImg} alt="user" className="  user-icon" />
                                    </div>
                                    {/* Emain input field start */}
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    {/* Emain input field end */}
                                    {/* password input field */}
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    {/* re-enter password */}
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Re-enter Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password should match" />
                                    </Form.Group>
                                    {/* checkbox */}
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Aleady Registered?" />
                                    </Form.Group>
                                    <Button className="btn-theme-purple text-white" type="submit" >
                                        Register
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

export default Register;