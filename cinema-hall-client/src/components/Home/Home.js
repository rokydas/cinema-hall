import React from 'react';
import Movie from '../Movie/Movie';
import './Home.css';
import { movies } from './Movies';

const Home = () => {

    return (
        <div className="custom-container text-center">
            <h1>Welcome to our Cinema Hall</h1>
            <h3>Choose your movie and book your sit</h3>
            <div className="row">
                {
                    movies.map(movie => <Movie movie={movie} key={movie.name} />)
                }
            </div>
        </div>
    );
};

export default Home;