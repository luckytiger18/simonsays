import React from 'react'
import classes from "./GamePiece.module.css";


const gamePiece = (props) => {

    var pieces = {
        1: classes.quarterTopLeftCircle,
        2: classes.quarterTopRightCircle,
        3: classes.quarterBottomLeftCircle,
        4: classes.quarterBottomRightCircle,
    }
    var pieceClass = [pieces[props.number]];
    if (props.boop) {
        pieceClass.push(classes.boop)
    }



    return(
        <div className={pieceClass.join(" ")}>

        </div>
    )
}
// TODO
// 1. make another property into the pieces class that will be a boolean. Booop true, apply CSS to it if false nothing will be class applied. 
// 2. go into game piece and manually set the number to the boop into Game to declare the pieces

export default gamePiece