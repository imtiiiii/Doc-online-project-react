// banner  component
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './Banner.css';
import banner from '../../../img/banner.png'
const Banner = () => {
    return (
        <div className="banner">
            <Row>
                <Col lg={6}>
                    <h1>Consult a Doctor
                        <br />
                        anytime,anywhere <br />
                        by <span>Video Call</span>
                    </h1>
                    <p>
                        Talk with a doctor using our highly secured HIPPA complaint <br /> end-to-end encryption video call.
                    </p>
                    <Button>
                        Ask A Doctor Online
                    </Button>
                    <Button>
                        Unlimited Chat
                    </Button>
                </Col>
                <Col lg={6}>
                    <img src={banner} alt="banner" />
                </Col>
            </Row>

        </div>
    );
};

export default Banner;