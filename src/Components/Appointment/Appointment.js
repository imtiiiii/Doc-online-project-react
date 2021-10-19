import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
    const [book, setBook] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        fetch('https://api.jsonbin.io/b/616f01194a82881d6c627bb2')
            .then(res => res.json())
            .then(data => setBook(data[3]));
    }, [])
    console.log(book);
    let found;
    useEffect(() => {

    }, [book])


    return (
        <div>

        </div>
    );
};

export default Appointment;