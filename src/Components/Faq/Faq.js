// FAQ component
import React, { useEffect, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import './Faq.css'
import faqImage from '../../img/faq1.jpeg'
import QNA from '../Qna/QNA';
const Faq = () => {
    // we will keep a state to keep all the data-(faq questions) .
    //qNA= question and answer
    const [qNAs, setQNAs] = useState([]);
    //now we have to fetch the data from our db
    // so we will useEffect to load the data 
    useEffect(() => {
        fetch("./doconlinedb.json")
            .then(res => res.json())
            .then(data => setQNAs(data[1]));
    }, [])

    return (
        <div className="faq-section">
            <div className="  mx-lg-auto faq-heading" >
                <h1>Frequently Asked Questions</h1>
                <h4>A frequently asked questions(FAQ) forum is often used in articles, websites, email lists, and online forums where common questions tend to recur.</h4>
            </div>
            <div>
                <Row className=" my-5">
                    {/* left side image */}
                    <Col lg={6} xs={11} className="d-flex justify-content-end align-items-end">
                        <div className="w-75  mx-auto">
                            <img src={faqImage} alt="faq" className="faq-img w-100  mx-auto "></img>
                        </div>
                    </Col>
                    {/* accordian/ faq-QNA */}
                    <Col lg={3} xs={11} className=" d-flex align-items-center shadow-sm bg-light">
                        <Accordion defaultActiveKey="0" flush >
                            {
                                qNAs.map(qNA => <QNA qNA={qNA} key={qNA.id}></QNA>)
                            }
                        </Accordion>
                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default Faq;