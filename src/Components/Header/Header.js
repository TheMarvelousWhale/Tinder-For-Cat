import React from 'react'
import PetsIcon from '@mui/icons-material/Pets'; 
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Header.css"
import {Link} from 'react-router-dom';

function Header({backButton}) {

    return (
        <div className="header">
            <IconButton>
                {backButton ? 
                (<Link to={backButton} >
                    <ArrowBackIosIcon className="header__icon" fontSize="large"/>
                </Link>)
                :(<PetsIcon className="header__icon" fontSize="large" />)}
            </IconButton>
            <Link to='/'>
            <img 
                className="header__logo"
                src="https://ih1.redbubble.net/image.517691212.2199/st,small,507x507-pad,600x600,f8f8f8.u7.jpg" 
                alt="Tinder for Cat"/>
            </Link>
            <Link to='/purr'>
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
