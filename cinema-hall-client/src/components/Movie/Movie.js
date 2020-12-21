import React from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TimerIcon from '@material-ui/icons/Timer';

const Movie = ({ movie }) => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="mb-5">
                <img src={movie.img} className="img-fluid mb-2" alt="" />
                <h3>{movie.name}</h3>
                <DateRangeIcon /> {movie.date} <br/>
                <TimerIcon /> {movie.time} <br />
                <button className="custom-btn">Book a sit</button>
            </div>
        </div>
    );
};

export default Movie;