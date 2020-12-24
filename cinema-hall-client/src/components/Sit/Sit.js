import React, { useEffect, useState } from 'react';
import './Sit.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useParams } from 'react-router-dom';

const Sit = ({ available, index, movie }) => {

    const [isAvailable, setIsAvailable] = useState(available);

    const [counter, setCounter] = useState(0);

    const { id } = useParams();

    const { sits } = movie;


    const changeAvailability = () => {

        if (counter >= 2) {
            alert('done');
        }

        setIsAvailable(false);

        const newCounter = counter + 1;
        setCounter(newCounter);
        console.log(counter);

        movie.sits[index] = false;

        fetch('http://localhost:5000/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ movie, id })
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div className={`${isAvailable ? "available-sit" : "unavailable-sit"}`}>
            <div onClick={changeAvailability} className="col-1">
                <SupervisorAccountIcon />
            </div>
        </div>
    );
};

export default Sit;