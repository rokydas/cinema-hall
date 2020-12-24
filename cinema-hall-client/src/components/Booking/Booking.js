import React from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TimerIcon from '@material-ui/icons/Timer';
import { useParams } from 'react-router-dom';
import { movies } from '../Home/Movies';
import Sit from '../Sit/Sit';
import './Booking.css';

const Booking = () => {
    const movieId = useParams().id;
    let sits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

    console.log(movieId);

    console.log(movies);

    const selectedMovie = movies.find(movie => movie.id === movieId);
    console.log(selectedMovie);

    const { name, img, date, time } = selectedMovie;

    return (
        <div className="text-center">
            <img width="250px" src={img} alt="" />
            <h3>{name}</h3>
            <DateRangeIcon /> {date} <br />
            <TimerIcon /> {time} <br />
            <div className="sit-container">
                <div className="row">
                    {
                        sits.map(sit => <Sit />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Booking;