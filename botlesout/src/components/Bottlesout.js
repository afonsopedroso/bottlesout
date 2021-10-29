import React, { Component,useState } from 'react'
import "../components/bottlesout.scss"
import champagne from "../components/yay-champagne.gif"

function Bottlesout() {
    const[jump,setJump]=useState(0);

    function handleClick(){
        if(jump<=5){
            setJump(jump+1);
        }else{
            setJump(0);
        }
    }
    return ( <div className="bd">
                <div className="mainContainer">
                    <div className="container">
                        <h1></h1>
                        <button onClick={handleClick} className="buttonCute">click 6 times for good luck</button>
                    </div>    
                    <div className="imgcont">
                        {jump === 5? <img src={champagne} alt="champage shower"/>: null}    
                    </div>
                </div>
            </div>
     
    );
}

export default Bottlesout;
