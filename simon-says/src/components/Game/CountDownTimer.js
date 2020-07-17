import React from 'react';

const CountDownTimer = (props) => {
    return(
        <div>
          {console.log("countdowntimer")}
          <h1>Starting in: </h1>
            <h1>{props.number}</h1>
        </div>
    )
} 



export default CountDownTimer