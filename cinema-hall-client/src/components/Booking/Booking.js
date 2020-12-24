import React, { useEffect, useState } from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TimerIcon from '@material-ui/icons/Timer';
import { useHistory, useParams } from 'react-router-dom';
import Sit from '../Sit/Sit';
import './Booking.css';

const Booking = () => {

    const [movies, setMovies] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('https://cinema-hall-server.herokuapp.com/movies')
            .then(res => res.json())
            .then(data => setMovies(data));
    }, [])

    const { id } = useParams();

    let selectedMovie = {};

    if (movies.length > 0) {
        selectedMovie = movies.find(movie => JSON.stringify(movie._id) === JSON.stringify(id));
    }

    const { name, img, date, time, sits } = selectedMovie;

    const makeAllAvailable = () => {
        fetch('https://cinema-hall-server.herokuapp.com/makeAllAvailable', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ selectedMovie, id })
            })
                .then(res => res.json())
                .then(data => {
                    history.go(0);
                });
    }

    let availableSit = [];

    if (sits) {
        availableSit = sits.filter(sit => sit === true);
    }

    const [counter, setCounter] = useState(0);

    return (
        <div className="text-center">
            {movies.length > 0 ?
                <div>
                    <img width="250px" src={img} alt="" />
                    <h3>{name}</h3>
                    <DateRangeIcon /> {date} <br />
                    <TimerIcon /> {time} <br />

                    {availableSit.length == 0 &&
                        <div>
                            <h3 className="text-danger">House is full</h3>
                            <button onClick={makeAllAvailable} className="custom-btn">Make all sits available</button>
                        </div>
                    }
                    <div className="sit-container">
                        <div className="row">
                            {
                                sits.map((sit, index) => <Sit movie={selectedMovie} key={index} index={index} available={sit} counter={counter} setCounter={setCounter} />)
                            }
                        </div>
                    </div>
                </div>
                :
                <h1>Loading...</h1>
            }
        </div>
    );
};

export default Booking;