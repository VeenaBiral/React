import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import './index.css';

const Header = () =>{
  return(
    <div className="header">
      <div className="logo-container">
    <img className="logo" src="https://th.bing.com/th/id/OIP.9hl54qFeHA_2o_PIo3JhswAAAA?w=168&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/> 
    </div>
    <div className="nav-items">
      <ul>
      <li> Home </li>
      <li> About us </li>
      <li> Contact us </li>
      <li> cart </li>
      </ul>
    </div>
    </div>
  )
}

const ResturantCard = () =>{
  return (
    <>
    <div className="res-card">
    <img className="img" src="https://th.bing.com/th/id/OIP.kivmD0Ici5ra5_PBap6rEQHaLG?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
    <h3>Meghanas Briyani</h3>
    <h4>South Indian food</h4>
    <h4>Star Rating 4.4 </h4>
    </div>
    </>
  )
}

const Body = () =>{
  return (
    <>
    <div className="bodyContainer">
    <div className="search"> Search </div>
    <div className="res-container">
      <ResturantCard/>
      <ResturantCard/> 
      <ResturantCard/> 
      <ResturantCard/>   
    </div>
  </div>
  </>
  )
}

const App = () => {
 return(
  <div className="app"> 
   <Header/>
   <Body/>
  </div>
 )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
