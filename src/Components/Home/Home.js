import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Speciality from '../Speciality/Speciality';
import Trust from '../Trust/Trust';
import './Home.css'
const Home = () => {
    //this state will keep the day of 
    //why a person should trust Doconline consult
    const [whyTrusted, setWhyTrusted] = useState([]);
    //now use a useEffect to load the data 
    //which contains trust reasons
    useEffect(() => {
        fetch('HTTPS://imtiiiii.github.io/db/doconlinedb.json')
            .then(res => res.json())
            .then(data => setWhyTrusted(data[0]));
    }, [])

    // a state to keep all the speacialities
    const [speacialities, setSpecialities] = useState([]);
    //now use a useEffect to load the data 
    //which contains specialities data
    useEffect(() => {
        fetch('HTTPS://imtiiiii.github.io/db/doconlinedb.json')
            .then(res => res.json())
            .then(data => setSpecialities(data[3]));
    }, [])
    //console.log(speacialities);

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
            <div className="service-container">
                <div className="w-50 mx-auto text-center">
                    <h1>Our consulting specialities</h1>
                    <h4>Ask a doctor online and get quick medical advice for your health queries. Our medical panel consists of over 3500+ doctors from 80 speacialities</h4>
                </div>
                {/* now i will map in the whole array of specialities to show the data  */}
                <Row>
                    {
                        speacialities.map(speciality => <Speciality key={speciality.id} speciality={speciality}></Speciality>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;