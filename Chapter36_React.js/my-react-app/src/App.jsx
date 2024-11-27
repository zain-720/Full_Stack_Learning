import React, { useState } from "react"

import Helper, {ColorText, inlineStyles, CurrentInfo} from "./components/Helper" //import the CavsText function
import LoggingDis from "./components/LoggingDis"

// Const variables for html use 
const date = new Date(2024, 11, 14);
const currentTime = new Date().getHours();
const player = "Lebron";
const player2 = "Kyrie";
const nbaImg = "https://people.com/thmb/TmfTXhup9_O6CA9Fl1sl-eMqXow=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(859x212:861x214)/Cavs_1-2000-ab44365e61114e68bde481f1d59f60c3.jpg"
const timedMessage = ColorText(); // Run before inlinestyles to set up color
var isLoggedIn = false;
const playerInfo = [
  { 
    id: 1,
    info: "random"
  },
  { 
    id: 2,
    info: "repeating"
  }
];

// Builder functions will stay in App (for mapping)
function BuildHelper(data){
  return(<Helper
  key ={data.id}
  info = {data.info}
  /> )
}

//Just some stuff to teach how arrow functions work
var numbers = [1,2,3,4,5]
const newNumbers = numbers.map(x => x*x);

function App() { //This function app holds our actual display that is given to main.ksx to display

  // useSate to setup changeable count (setSateValue, FunctionToChangeSetSateValue) = useSate(InitialUseSateValue)
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  //Dynamic time updating useState(), value stored in currTime
  const now = new Date().toLocaleTimeString();
  const[currTime, setTime] = useState(now);
  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(updateTime,1000);

  return (
    <div>
      <h1>Hello World I am {player + " or " + player2} </h1>
      <h2>{currTime}</h2>
      {playerInfo.map(BuildHelper)}
      <div>
        <img className="editor" src={nbaImg} alt="Cool Photo"/>
        {CurrentInfo(player, "Los Angeles")}
        {CurrentInfo(player2, "Dallas")}
      </div>
      <p style={inlineStyles}>{timedMessage} </p>
      <br/>

      {/*Ternary Operator, if isloggedin true display text, else if false run LoggingDis*/}
      {/* Within the LoggingDis is a button which changes color as you hover over it */}
      {isLoggedIn ? <h3>You are logged in</h3> : <LoggingDis />}
      {/*AND Operator, display text if the evalutation is true*/}
      {currentTime < 12 && <h3>Why are you still working?</h3>}

      {/*State updateable button and text*/}
      <h3>{count}</h3>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>

      <p><br/>Copyright Zain.co.inc, {date.getFullYear() - 2011} years strong.</p>
    </div>
  )
}

export default App
