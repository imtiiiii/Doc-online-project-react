import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
    const [book, setBook] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        fetch('HTTPS://imtiiiii.github.io/db/doconlinedb.json')
            .then(res => res.json())
            .then(data => setBook(data[3]));
    }, [])
    console.log(book);



    return (
        <div>
            <h1>Hi im dynamic {id}</h1>
        </div>
    );
};

export default Appointment;