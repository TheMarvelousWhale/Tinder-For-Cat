import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
function SwipeButtons() {
    const font_size = 50;
    return (
        <div className="swipeButtons">
            <IconButton> <ReplayIcon   style={{color:"#f5b748", fontSize:font_size}} className="swipeButton" />   </IconButton>
            <IconButton> <CloseIcon    style={{color:"#ec5e6f", fontSize:font_size}} className="swipeButton" />    </IconButton>
            <IconButton> <StarRateIcon style={{color:"#62b4f9", fontSize:font_size}} className="swipeButton" /> </IconButton>
            <IconButton> <FavoriteIcon style={{color:"#76e2b3", fontSize:font_size}} className="swipeButton" /> </IconButton>
            <IconButton> <FlashOnIcon  style={{color:"#915dd1", fontSize:font_size}} className="swipeButton" />  </IconButton>
        </div>
    )
}

export default SwipeButtons
