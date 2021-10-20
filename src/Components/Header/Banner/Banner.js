// banner  component
import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import './Banner.css';
import banner from '../../../img/banner.jpeg'
const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row className=" mx-auto">
                    <Col lg={6} xs={11} className="  py-5 ps-lg-5  d-flex flex-column justify-content-center " id="banner-text">
                        <div className="">
                            <h1 className="mb-5">Consult a Doctor
                                <br />
                                anytime,anywhere <br />
                                by <span className="video-call">Video Call</span>
                            </h1>
                            <p className="mb-5">
                                Talk with a doctor using our highly secured HIPPA complaint <br /> end-to-end encryption video call.
                            </p>
                        </div>
                        <div>
                            <Button className="me-lg-5 me-2 btn-theme-purple rounded-pill px-3">
                                Ask A Doctor Online
                            </Button>
                            <Button className="ms-lg-5 btn-theme-white rounded-pill px-3">
                                Unlimited Chat
                            </Button>
                        </div>
                    </Col>
                    <Col lg={5} xs={10} id="banner-img" className="">
                        <img src={banner} alt="banner" className="w-75" />
                        {/* <Button className="btn-theme-white rounded-pill px-4" id="doctors-online">
                        <span className="online-symbol">*</span> 2210 Doctors online
                    </Button> */}
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Banner;