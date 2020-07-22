import React from 'react'
import classes from "./GamePiece.module.css"

const gamePiece = (props) => {
    var pieces = {
        1: classes.quarterTopLeftCircle,
        2: classes.quarterTopRightCircle,
        3: classes.quarterBottomLeftCircle,
        4: classes.quarterBottomRightCircle
    }
    return(
        <div className={pieces[props.number]}>
        </div>
    )
}

export default gamePiece