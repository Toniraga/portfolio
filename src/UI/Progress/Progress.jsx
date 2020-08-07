import React from 'react'

import classes from './Progress.module.css'


const Filler = props => {
    return <div 
        className={classes.filler} 
        style={{width: `${props.percentage}%`}} 
    />
}


export const ProgressBar = props => {
    return (
        <div className={classes.progress}>
            <Filler percentage={props.percentage} />
        </div>
    )
}

