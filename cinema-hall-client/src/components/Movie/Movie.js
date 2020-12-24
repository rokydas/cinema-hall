import React from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TimerIcon from '@material-ui/icons/Timer';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {

    // const insert = () => {
    //     fetch('http://localhost:5000/insert', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(movie)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             alert('Your subject is inserted successfully');
    //         });
    // }

    return (
        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="mb-5">
                <img src={movie.img} className="img-fluid mb-2" alt="" />
                <h3>{movie.name}</h3>
                <DateRangeIcon /> {movie.date} <br />
                <TimerIcon /> {movie.time} <br />
                <Link to={`/booking/${movie._id}`}><button className="custom-btn">Book a sit</button></Link>
            </div>
        </div>
    );
};

export default Movie;