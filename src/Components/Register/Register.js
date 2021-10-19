// this component will be used for registration form 
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Register.css';
import userImg from '../../img/register1.png'
import loginImg from '../../img/login1.png';
import useAuth from '../../Hooks/useAuth'
import { useHistory } from 'react-router';
const Register = () => {
    let history = useHistory();
    // getting all the information from context api
    const { user, loginWithEmailPass, CreateAccountWithEmailPass, googleLogin, regStutus } = useAuth();

    // using  useState to keep user email and password
    const [userDetails, setUserDetails] = useState(
        {
            email: "",
            pass: "",
        }
    )
    const handleInput = (e) => {
        const valueName = e.target.name;
        const value = e.target.value;
        setUserDetails({ ...userDetails, [valueName]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        CreateAccountWithEmailPass(userDetails.email, userDetails.pass);
    }
    const handleGoogleLogin = () => {
        googleLogin();
    }
    const alreadyRegister = (e) => {
        const value = e.target.checked;
        if (value) {
            history.push('/login');
        }


    }

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
                                <form onSubmit={handleSubmit} className="shadow-sm px-5 rounded-3 bg-light mt-5 mb-3 py-5">
                                    {/* user icon */}
                                    <div className="w-25 mx-auto d-flex justify-content-center align-items-center mb-5 mt-3">
                                        <img src={userImg} alt="user" className="  user-icon" />
                                    </div>
                                    {/* Emain input field start */}
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" name="email" id="email" onBlur={handleInput} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                                    </div>
                                    {/* password field */}
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" name="pass" onBlur={handleInput} />
                                    </div>
                                    {/* re-enter password
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword2" className="form-label">Re-enter Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword2" />
                                    </div> */}
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={alreadyRegister} />
                                        <label className="form-check-label" htmlFor="exampleCheck1" >Already Registered?</label>
                                    </div>
                                    {/* re-enter password */}

                                    <Button className="btn-theme-purple text-white" type="submit" >
                                        Register
                                    </Button>
                                    <Button className="btn-theme-purple text-white" type="submit" onClick={handleGoogleLogin} >
                                        Google Login
                                    </Button>
                                    {
                                        user && <h3>{regStutus}</h3>
                                    }

                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;


