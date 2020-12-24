import React, { useEffect, useState } from 'react';
import './Sit.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useParams } from 'react-router-dom';

const Sit = ({ available, index, movie, counter, setCounter }) => {

    const [isAvailable, setIsAvailable] = useState(available);

    const { id } = useParams();

    const changeAvailability = () => {

        if (counter >= 10) {
            alert("You can't buy more than 10 tickets.");
        }
        else {
            setIsAvailable(false);

            const newCounter = counter + 1;
            setCounter(newCounter);
            console.log(counter);

            movie.sits[index] = false;

            fetch('https://cinema-hall-server.herokuapp.com/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ movie, id })
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }

    }

    return (
        <div>
            {isAvailable ?
                <div className="available-sit">
                    <div onClick={changeAvailability} className="col-1">
                        <SupervisorAccountIcon />
                    </div>
                </div>
                :
                <div className="unavailable-sit">
                    <div className="col-1">
                        <SupervisorAccountIcon />
                    </div>
                </div>
            }
        </div>
    );
};

export default Sit;