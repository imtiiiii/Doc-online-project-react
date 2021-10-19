//this componenet is for login 
import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import userImg from '../../img/register1.png'
import loginImg from '../../img/login1.png';
import useAuth from '../../Hooks/useAuth';
const Login = () => {

    const { user, loginWithEmailPass, googleLogin, regStutus } = useAuth();

    // using  useState to keep user email and password
    const [userDetails, setUserDetails] = useState(
        {
            email: "",
            pass: "",
        }
    )
    const handleGoogleLogin = () => {
        googleLogin();
    }
    const handleInput = (e) => {
        const valueName = e.target.name;
        const value = e.target.value;
        setUserDetails({ ...userDetails, [valueName]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        loginWithEmailPass(userDetails.email, userDetails.pass)

    }
    return (
        <>

            <Container className="my-5 form-container bg-light">
                <h1 className="text-center my-4 ">Please login </h1>
                <Row>
                    <Col lg={6} className=" d-lg-flex align-items-center d-none">
                        <div className="d-flex justify-content-center">
                            <img src={loginImg} alt="login" className="w-50 " />
                        </div>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-center align-items-center">
                        <div className=" d-flex justify-content-start align-items-center">
                            <div className="d-flex justify-content-start  form-container ">
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
                                    <Button className="btn-theme-purple text-white" type="submit" >
                                        Login
                                    </Button>
                                    <Button className="btn-theme-purple text-white" type="submit" onClick={handleGoogleLogin}>Google Login </Button>
                                    {
                                        user && <h3 className="mt-3">{regStutus}</h3>
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

export default Login;