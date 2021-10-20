import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
    // 11. Finally show it to the user





    return (
        <div>
            <h1>Hi im dynamic {id}</h1>
        </div>
    );
};

export default Appointment;