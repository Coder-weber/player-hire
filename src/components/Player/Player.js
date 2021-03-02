import React, { useEffect } from 'react';
import Hire from './Hire/Hire';
import './player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import { Popover } from 'bootstrap';
import { Overlay, OverlayTrigger } from 'react-bootstrap';
import { render } from '@testing-library/react';



const Player = (props) => {
    const handleAddPlayer=props.handleAddPlayer;
    // console.log(props.testing);
    
    const {name,email,phone,club,salary,image}=props.player;
    const stylyPlayer={
      borderRadius:'1px solid gray'
    }

    return (
        <div className="container-player">
            <div className="player-details-info">
            <img src={image} alt=""/>
            <h2>Name: {name}</h2>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
            <p>Club: {club} </p>
            <p>Salary:${salary} </p>
            <Button className="main-btn" variant="success"onClick={()=>handleAddPlayer(props.player)}><FontAwesomeIcon icon={faShoppingCart} /> Add Player </Button>{' '}
           
            </div>

         </div>
    );
};

export default Player;