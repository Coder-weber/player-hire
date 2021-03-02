import logo from './logo.svg';
import './App.css';
import playerData from './fakedata/data.json';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import Hire from './components/Player/Hire/Hire';

function App() {
 const [player,SetPlayer]=useState([]);
 const [hire,setHire]=useState([]);
 
 useEffect(()=>{
  SetPlayer(playerData);
 },[]);
 
 const handleAddPlayer=(player)=>{
  //  const index=player.indexOf(player.id);
  // const c=indexOf(player.id);
 
 const newPlayer=[...hire,player];
 setHire(newPlayer);
 }

 // const newHire=[...player,Player];
  // SetPlayer(newHire);


  return (
    <div className="App">

        <h2>Total player: {playerData.length} </h2>            
         
          
          <Hire hire={hire}></Hire> 
    
        <div className="player-details">
        {
          player.map(ply=><Player player={ply} handleAddPlayer={handleAddPlayer}></Player>)
        }
        </div>

      </div>
    
  );
}

export default App;
