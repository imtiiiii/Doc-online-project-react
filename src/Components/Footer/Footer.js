import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <Container className="bg-light py-4 footer-container">
                <Row>
                    <Col lg={3} xs={11} className="">
                        <h1>Doconline <br></br>
                            Consult
                        </h1>
                        <p>
                            Talk with our doctors with highly <br></br> end-to-end encryption
                        </p>
                    </Col>
                    <Col lg={3} xs={11}>
                        <ul>
                            <li>Ask a doctor online</li>
                            <li>Chat with a Doctor</li>
                            <li>Phone  a doctor</li>
                            <li>Video Consultation</li>
                            <li>Covide-19 care</li>
                            <li>Physician directory</li>
                            <li>Articles</li>
                        </ul>
                    </Col>
                    <Col lg={3} xs={11}>
                        <ul>
                            <li>Blogs</li>
                            <li>Careers</li>
                            <li>About us</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Ads policy</li>
                            <li>Press</li>
                        </ul>
                    </Col>
                    <Col lg={3} xs={11}>
                        <ul>
                            <li>Get widget</li>
                            <li>Medical review team</li>
                            <li>Symptom Checker</li>
                            <li>Deals & offers</li>
                            <li>Support</li>
                            <li>Help</li>

                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;