import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Appointment.css';
import bookImg from '../../img/book1.jpg'
const Appointment = () => {
    /* 
        1. lets get all available booking/servic that a user can try to book
        2.we will get the booking from our DB
        3.keeping all the available bookings in our book state
    */
    const [book, setBook] = useState([]);
    // 4.using params we will get the particular service user wants to book
    let { id } = useParams();
    // 5.id will be in string format
    // 6.parseint it to make it int
    id = parseInt(id);
    //7. laoding data of all service and storing it to book
    useEffect(() => {
        fetch('HTTPS://imtiiiii.github.io/db/doconlinedb.json')
            .then(res => res.json())
            .then(data => setBook(data[3]));
    }, [])
    // 8. Now we have to find that particular service/appointment user wants to book
    let service = [];
    //9. loop through all the data to get that one service
    for (const e of book) {
        if (e.id === id) {
            service.push(e);
            // 10. after finding it break the loop
            break;
        }
    }
    //11.Stop from reloading whe user submits his response


    // 12. Finally show it to the user





    return (
        <div >
            <Container className="book-this-service-container d-flex flex-column justify-content-center align-items-center">
                <div className="bg-danger p-5 rounded-circle d-flex flex-column justify-content-center align-items-center">
                    <div className="speciality-img">
                        <img src={service[0]?.img} alt="speciality" className="rounded-pill"></img>
                    </div>
                    <div >
                        <h3 className="fw-bolder">{service[0]?.name}</h3>
                    </div>
                    <div >
                        <h4 className="fw-bolder">Price range: ${service[0]?.price}</h4>
                    </div>
                </div>
                <h1 className="text-center my-5 fw-bold">Book Now</h1>
                <Row className=" w-100 d-flex  justify-content-center align-items-center ">
                    <Col lg={4} className="book-img my-5">
                        <img src={bookImg} alt="book"></img>
                    </Col>
                    <Col lg={4} className="">
                        <Form className="my-5">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label >Email address</Form.Label>
                                <Form.Control className="my-2" type="email" placeholder="Enter email" />
                                <Form.Label>Your Contact Number</Form.Label>
                                <Form.Control type="phone" className="my-2" placeholder="Phone Number" />
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="input" className="my-2" placeholder="Adress" />
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" className="my-2" placeholder="Age" />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                            <Button variant="primary" type="submit">
                                Book
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Appointment;