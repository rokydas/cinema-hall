import React, { useEffect, useState } from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TimerIcon from '@material-ui/icons/Timer';
import { useParams } from 'react-router-dom';
import Sit from '../Sit/Sit';
import './Booking.css';

const Booking = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://cinema-hall-server.herokuapp.com/movies')
            .then(res => res.json())
            .then(data => setMovies(data));
    }, [])

    const { id } = useParams();

    let selectedMovie = {};

    if(movies.length > 0) {
        selectedMovie = movies.find(movie => JSON.stringify(movie._id) === JSON.stringify(id));
    }
    
    const { name, img, date, time, sits } = selectedMovie;

    return (
        <div className="text-center">
            {movies.length > 0 ?
                <div>
                    <img width="250px" src={img} alt="" />
                    <h3>{name}</h3>
                    <DateRangeIcon /> {date} <br />
                    <TimerIcon /> {time} <br />
                    <div className="sit-container">
                        <div className="row">
                            {
                                sits.map((sit, index) => <Sit movie={selectedMovie} key={index} index={index} available={sit} />)
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