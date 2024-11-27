import React, { useState } from "react";
import Input from "./Input";
import UsersName from "./fullNameU";

function LoggingDis(){

  //Use State for dynamicaly changing text
  const [headingText, setHeadingText] = useState('Login not clicked yet');
  //Use State for dynamically changing color
  const [isMousedOver, setMouseOver] = useState(false);
  
  //Use state for change in given username
  const [fullName, setName] = useState({
    fName: "", lName: ""
  });

  
  
  const [userVisable, setVis] = useState("");
  //Functions to handle actions
  function handleClick(event){
    setHeadingText('Login Pressed');
    setVis(fullName.fName + " " + fullName.lName);
    event.preventDefault(); //Blocks form refresh
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  //Event holds information on what caused the call, and the value that was at call
  function handleChange(event){
    const input = event.target.name;
    const text = event.target.value;

    //Create a return function that doesnt overwrite the previous values on the dict
    setName(prevValue =>{
      if(input === "fName"){
        return {
          fName: text,
          lName: prevValue.lName
        }
      }
      else{
        return {
          lName: text,
          fName: prevValue.fName
        }
      }
    });
  }

  const [strikeCount, setCount] = useState(0);

  return (
    <form onSubmit={handleClick}>
      <UsersName name={userVisable} func={setCount}  funcVal={strikeCount}/>
      <h4>Total strike though clicks : {strikeCount}</h4>
      {/*Input boxes put as there own reusable component*/}
      <input name="fName" onChange={handleChange} type="text" placeholder="First Name" value={fullName.fName}/>
      <input name="lName" onChange={handleChange} type="text" placeholder="Last Name" value={fullName.lName}/>
      <Input type="password" placeholder="Password" />
      {/*Button will actievly change state and display appropriate background color*/}
      <button onClick={handleClick} 
      style={{backgroundColor: isMousedOver ? "gray" : "white", color: isMousedOver ? "gold" : "black"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut} 
      type="submit">Login</button>
    </form>)  
}

export default LoggingDis;