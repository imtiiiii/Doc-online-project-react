// FAQ component
import React, { useEffect, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import './Faq.css'
import faqImage from '../../img/faq1.jpg'
const Faq = () => {
    // we will keep a state to keep all the data-(faq questions) .
    //qNA= question and answer
    const [qNA, setQNA] = useState([]);
    //now we have to fetch the data from our db
    // so we will useEffect to load the data 
    useEffect(() => {
        fetch("./doconlinedb.json")
            .then(res => res.json())
            .then(data => setQNA(data[1]));
    }, [])
    console.log(qNA);
    return (
        <div className="faq-section">
            <div className="  mx-lg-auto faq-heading" >
                <h1>Frequently Asked Questions</h1>
                <h4>A frequently asked questions(FAQ) forum is often used in articles, websites, email lists, and online forums where common questions tend to recur.</h4>
            </div>
            <div>
                <Row className="border border-danger mt-5">
                    <Col lg={6} className="">
                        <div className="w-75 mx-auto">
                            <img src={faqImage} alt="faq" className="w-50 faq-img"></img>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default Faq;