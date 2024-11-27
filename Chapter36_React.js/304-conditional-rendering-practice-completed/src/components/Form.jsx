import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (<input type="password" placeholder="Confirm Password" />)} 

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  ); /*Conditional rendering added for the confirm passwrod feild with && and text in submit box is found conditionally with ? */
}

export default Form;
