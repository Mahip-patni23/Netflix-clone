import React from 'react'
import './SingleQuestion.css';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';

function SingleQuestion({title, info}) {
    const [show, setShow] = useState(false);
    return (
        <div className="singleQuestion">
            <header>
                <h4>{title}</h4>
                <button className="singleQuestion_btn" onClick={() => setShow(!show)}>
                    {show?<CloseIcon></CloseIcon>:<AddIcon></AddIcon>}
                </button>
            </header>
            {show && <p>{info}</p>}
        </div>
    )
}

export default SingleQuestion
