import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchURL, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const [trailorUrl, setTrailorUrl] = useState("");

    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(fetchURL);
            const allMovies = request.data.results;
            setMovies(allMovies);
            return request;
        }

        fetchData();

    }, [fetchURL])

    const opts = {
        height: "390",
        width: "100%",
        playerVars:{
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailorUrl){
            setTrailorUrl("");
        }else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailorUrl(urlParams.get("v"));
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map((movie) => {
                        return <img 
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                            key={movie?.id} 
                            onClick={() => handleClick(movie)}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name} />
                    })
                }
            </div>
            {trailorUrl && <YouTube videoId={trailorUrl} opts={opts}></YouTube>}
        </div>
    )
}

export default Row;
