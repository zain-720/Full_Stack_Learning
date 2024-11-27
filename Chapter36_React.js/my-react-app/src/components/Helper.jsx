import React from "react";

//Helper file with function to help build the main JSX display


//style setup dictionary
const inlineStyles = {
  color: "gray",
  fontSize: "20px"
};

//Function to get time of day
function ColorText(){
  const time  = new Date().getHours();
  // Math.floor(Math.random() * (24 - 1)); //random will only get from 0 - 1 in decimal 

  if(time < 12){ // If time is before 12pm
    inlineStyles.color = "blue";
    return ("It's a cool night right now " + time + " hours gone in the day");
  }
  else if (time >= 12){
    inlineStyles.color = "red";
    return ("it's a hot day right now " + time + " hours gone in the day");
  }
}

//Diplays current info about a player based on inputs 
function CurrentInfo(name, city){

  return <div className="purple">
    <h3>Currently {name} is in {city} </h3>
  </div>
}

//Function to tell which Cavs player rn (idk wher im going with this)
//This function in the default function so it will take in info from props object
function Helper(props){
  const date = new Date(2024, 11, 14);
  const hour = new Date().getHours();
  let currPlayer;

  if(hour < 12){ // If time is before 12pm
    currPlayer = props.info +" Lebron"
  }
  else if (hour >= 12){
    currPlayer = props.info + " Kyrie"
  }
    
  return (<h2>Today I am {currPlayer}</h2>);
}

export default Helper;
export {ColorText, inlineStyles, CurrentInfo};