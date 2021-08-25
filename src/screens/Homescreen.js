import React from 'react';
import './Homescreen.css';
import Navbar from '../Navbar';
import Banner from '../Banner';
import requests from '../request';
import Row from '../Row';


function Homescreen() {
    return (
        <div className="homescreen">
            <Navbar></Navbar>

            <Banner></Banner>

            <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow></Row>
            <Row title="Trending Now" fetchURL={requests.fetchTrending} isLargeRow></Row>
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow></Row>
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} isLargeRow></Row>
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} isLargeRow></Row>
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} isLargeRow></Row>
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies} isLargeRow></Row>
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} isLargeRow></Row>
            
        </div>
    )
}

export default Homescreen
