// this will store all the faq one by one
import React from 'react';
import { Accordion } from 'react-bootstrap';
import './QNA.css';
const QNA = (props) => {
    //all the details are in props.qNA object
    const { eventKey, header, body } = props.qNA;

    return (
        <div className="qna my-3">
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>{header}</Accordion.Header>
                <Accordion.Body>
                    {body}
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
};

export default QNA;