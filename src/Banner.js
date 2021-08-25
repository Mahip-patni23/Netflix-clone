import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Banner.css';
import requests from './request';

function Banner() {
    const [movie, setMovie] = useState([]);

    function truncate(string, num){
        if(string?.length > num){
            return string.substr(0, num-1) + " .....";
        }
        return string;
    }

    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const randomMovie = request.data.results[Math.floor(Math.random() * request.data.results.length)];
            setMovie(randomMovie);
            return request;
        }
        fetchData();
    }, [])

    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center',
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.original_name || movie?.name || movie?.title }</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(`${movie?.overview}`, 150)}
                </h1>
            </div>

            <div className="banner_bottomfade">
            </div>
        </header>
    )
}

export default Banner
