import React from 'react';
import './hire.css';
const Hire = (props) => {
    const hire=props.hire;
    // let totalPrice=0;
    // for (let i = 0; i < hire.length; i++) {
    //     const player = hire[i];
    //     totalPrice=totalPrice+player.salary
    // }
    let copun=0;
    const totalPrice=hire.reduce((sum,player)=>sum+player.salary,0)
    
    return (
        <div className="summary">
            <h1>Player Summery</h1>
            <h3>Player Hire:{hire.length} </h3>  
            <h2>Player Add My Team:</h2>
           
            {hire.map(player=>' '+player.name )}  
            
            <h2>Total Budge:${totalPrice} </h2>
        </div>
    );
};

export default Hire;