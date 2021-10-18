import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Trust from '../Trust/Trust';
import './Home.css'
const Home = () => {
    //this state will keep the day of 
    //why a person should trust Doconline consult
    const [whyTrusted, setWhyTrusted] = useState([]);
    //no use a useEffect to load the data 
    //which contains trust reasons
    useEffect(() => {
        fetch('./doconlinedb.json')
            .then(res => res.json())
            .then(data => setWhyTrusted(data[0]));
    }, [])
    return (
        <div>
            <div className="text-center heading my-5">
                <h1>Why You should trust us ?</h1>
                <h1>Get to know about us</h1>
            </div>
            <Container>
                <Row className="my-5">
                    {
                        whyTrusted.map(trust => <Trust reason={trust} key={trust.id}></Trust>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;