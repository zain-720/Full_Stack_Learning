import React, {useState} from "react"

// Get users fullnname and print it
function UsersName(props){

    const[isDone, setIsDone] = useState(false);

    function handleClick(){
        setIsDone((prevValue) => {
            //Add to the strike count useState from loggingDis
            if(prevValue === false){
                props.func(props.funcVal + 1);
            }
            return !prevValue;
        });
    }

    return (
        <div onClick={handleClick}>
            <h4 style={{textDecoration: isDone ? "line-through": "none"}}>Current user's name : {props.name}</h4>
        </div>
    );
}

export default UsersName;