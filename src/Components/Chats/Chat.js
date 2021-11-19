import React from 'react'
import { Avatar } from '@mui/material';
import "./Chat.css"
import {Link} from 'react-router-dom';

function Chat({name,msg,time,profilePic}) {
    return (
        <Link to={`${name}`}>
        <div className="chat">
            <Avatar className="chat__img" src={profilePic}/>
            <div className="chat__details">
                <h2>{name}</h2>
                <p>{msg}</p>
            </div>
            <p className="chat__timestamp"> {time}</p>
        </div>
        </Link>
    )
}

export default Chat
