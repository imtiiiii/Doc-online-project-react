// this compo will show all spacialitis one by one
import './Speciality.css';
import React from 'react';
import { Col } from 'react-bootstrap';

const Speciality = (props) => {
    const { name, img } = props.speciality;
    return (
        <>
            <Col lg={2} className="my-5 bg-light shadow-sm rounded-3 speciality mx-lg-5 d-flex flex-column justify-content-center align-items-center">
                <div className="speciality-img">
                    <img src={img} alt="speciality" className="rounded-pill"></img>
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
            </Col>
        </>
    );
};

export default Speciality;