import React from 'react'
import './GetStarted.css';
import { useHistory } from 'react-router-dom';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import Header from '../Header';

function GetStarted() {
    const history = useHistory();

    return (
        <div className="profile">

            <Header></Header>
            
            <div className="profile_container">
                <CheckCircleOutlineOutlinedIcon fontSize="large" className="profile_container_icon"></CheckCircleOutlineOutlinedIcon>
                
                <h2 className="profile_container_heading">Choose Your Plan</h2>
                <div className="profile_container_points">
                    <div className="profile_container_singlePoint">
                        <CheckOutlinedIcon className="profile_tick"></CheckOutlinedIcon>
                        <h3>No commitments, Cancel anytime.</h3>
                    </div>

                    <div className="profile_container_singlePoint">
                        <CheckOutlinedIcon className="profile_tick"></CheckOutlinedIcon>
                        <h3>Everything on Netflix for one low price.</h3>
                    </div>

                    <div className="profile_container_singlePoint">
                        <CheckOutlinedIcon className="profile_tick"></CheckOutlinedIcon>
                        <h3>No ads and no extra fees. Ever.</h3>
                    </div>
                </div>

                <button className="profile_nextbtn" onClick={() => history.push('/planform')}>Next</button>
            </div>
        </div>
    )
}

export default GetStarted
