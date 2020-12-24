import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import './Home.css';

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(data => setMovies(data));
    }, [])

    return (
        <div>
            {movies.length > 0 ? 
            <div className="custom-container text-center">
                <h1>Welcome to our Cinema Hall</h1>
                <h3>Choose your movie and book your sit</h3>
                <div className="row">
                    {
                        movies.map(movie => <Movie movie={movie} key={movie._id} />)
                    }
                </div>
            </div>
            :
            <h1 className="text-center">Loading...</h1>    
        }
        </div>
    );
};

export default Home;