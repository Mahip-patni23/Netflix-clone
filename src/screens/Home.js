import React, { useState } from 'react'
import './Home.css'
import questions from '../data';
import SingleQuestion from '../SingleQuestion';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useGlobalContext} from '../Context';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';

function Home() {
    const { user } = useGlobalContext();
    const [email, setEmail] = useState("");
    const history = useHistory();
    
    const handleChange = (e) => {
        setEmail(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const finishSignUp = () => {
        if(user){
            history.push('/getstarted');
        }
    }

    useEffect(() => {
        Aos.init({duration:1000});
    }, [])

    return (
        <div className="home">
            <div className="home_background">

                <Header></Header>

                <div className="home_body">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className="home_input">
                        <form onSubmit={handleSubmit}>
                            {!user && <input type="email" placeholder="Email Address" value={email} onChange={handleChange}/>}
                            <button type="submit" onClick={finishSignUp} className="home_getStarted">{user?"Finish Sign Up >":"GET STARTED >"}</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="home_aboutNetflix">
                <div className="home_infoSection">
                    <div className="home_info">
                        <div className="home_headline" data-aos="fade-right">
                            <h1>Enjoy on your TV.</h1>
                            <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                        </div>
                        <img data-aos="fade-left" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="tv" />
                    </div>
                </div>

                <div className="home_infoSection">
                    <div className="home_info">
                        <img data-aos="fade-right" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="phone" />
                        <div className="home_headline" data-aos="fade-left">
                            <h1>Download your shows to watch offline.</h1>
                            <h2>Save your favourites easily and always have something to watch.</h2>
                        </div>
                    </div>
                </div>

                <div className="home_infoSection">
                    <div className="home_info">
                        <div className="home_headline" data-aos="fade-right">
                            <h1>Watch everywhere.</h1>
                            <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                        </div>
                        <img data-aos="fade-left" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="devices" />
                    </div>
                </div>

                <div className="home_infoSection">
                    <div className="home_info">
                        <img data-aos="fade-right" src="https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" alt="children" />
                        <div className="home_headline" data-aos="fade-left">
                            <h1>Create profiles for children.</h1>
                            <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                        </div>
                    </div>
                </div>

                <div className="home_infoSection">
                    <div className="home_headline">
                        <h1>Frequently Asked Questions</h1>
                    </div>

                    <div className="home_questionsAnswers">
                        {
                            questions.map((question) => {
                                return <SingleQuestion key={question.id} {...question}></SingleQuestion>
                            })
                        }
                    </div>

                    <div className="home_body">
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className="home_input home_infoSection_input">
                            <form onSubmit={handleSubmit}>
                                {!user && <input type="email" placeholder="Email Address" value={email} onChange={handleChange}/>}
                                <button onClick={finishSignUp} className="home_getStarted home_infoSection_getStarted" type="submit">{user?"Finish Sign Up >":"GET STARTED >"}</button>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

