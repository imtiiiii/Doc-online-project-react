// FAQ component
import React, { useEffect, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import './Faq.css'
import faqImage from '../../img/faq1.jpg'
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
                <Row className="border border-danger mt-5">
                    <Col lg={6} className="">
                        <div className="w-75 mx-auto">
                            <img src={faqImage} alt="faq" className="w-50 faq-img"></img>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Accordion defaultActiveKey="0" flush>
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