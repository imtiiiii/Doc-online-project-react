// this compo will show all spacialitis one by one
import './Speciality.css';
import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const Speciality = (props) => {
    const { name, img, id } = props.speciality;

    return (
        <>
            <Col lg={2} className="my-5 speciality-container  shadow-sm rounded-3 speciality mx-lg-5 d-flex flex-column justify-content-center align-items-center card-animation">
                <div className="speciality-img">
                    <img src={img} alt="speciality" className="rounded-pill"></img>
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
                <Button className="btn-theme-purple text-white my-3" type="submit" >
                    <NavLink className="book-this-btn" to={`/home/${id}`}>
                        Book this
                    </NavLink>
                </Button>
            </Col>
        </>
    );
};

export default Speciality;