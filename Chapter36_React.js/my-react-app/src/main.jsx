//import { StrictMode } from 'react' //Specific module from react
//import { createRoot }  from 'react-dom/client' // This would import just the createRoot module and not all of ReactDOM

import React from "react"
import ReactDOM from "react-dom/client"
import './index.css' //importing a CSS file to style with

//import App from './App.jsx' // Its .CSS it imports affects the file as well, also we can import other JSX to this one

// Const variables for html use 
const date = new Date(2024, 11, 14);
const hour = date.getHours();
const player = "Lebron";
const player2 = "Kyrie";
const nbaImg = "https://people.com/thmb/TmfTXhup9_O6CA9Fl1sl-eMqXow=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(859x212:861x214)/Cavs_1-2000-ab44365e61114e68bde481f1d59f60c3.jpg"

let timedMessage; // let gives us the ability to change the value later
//style setup
const inlineStyles = {
  color: "white",
  fontSize: "20px"
};
if(hour < 12){ // If time is before 12pm
  inlineStyles.color = "blue"
  timedMessage = "It's a cool night right now"
}
else if (hour >= 12){
  inlineStyles.color = "red"
  timedMessage = "it's a hot day right now"
}

//Modern version of the React-dom.render() method
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1>Hello World I am {player + " or " + player2} </h1>

    <div>
      <img className="editor" src={nbaImg} alt="Cool Photo"/>
    </div>
    
    <p style={inlineStyles}>{timedMessage}</p>
    <p><br/>Copyright Zain.co.inc, {date.getFullYear() - 2011} years strong.</p>
  </div>
)
