//this component will show reasons of trusting one by one
import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './Trust.css'
const Trust = (props) => {
    //props.reason will contain all the information of a single cart
    const { title, description, img } = props.reason
    return (

        <Col lg={3} xs={11} className="bg-light   rounded-3 trust-card border border-white border-5 card-animation">
            <div className="w-50 trust-icon mx-auto my-4">
                <img src={img} alt="" className="" />
            </div>
            <h2 className="trust-title mb-5">{title}</h2>
            <h5 className="text-center">{description}</h5>
        </Col>

    );
};

export default Trust;