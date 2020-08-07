import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import { GlobalContext } from '../../context/GlobalState'

import classes from './Success.module.css'

const Success = () => {
    const { authenticate } = useContext(GlobalContext)

    return (
        <div className={classes.success}>
        <div className={classes.congrats}>
            <h2>CONGRATULATIONS!! YOU PASSED!!</h2>
            <h3> THANKS FOR PLAYING! </h3>
        </div>
        <div className={classes.link}>
            <Link 
                to='/portfolio'
                onClick={() => authenticate()}
            > CONTINUE </Link>
        </div>
        <div className={classes.container}>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
            <div className={classes.confetti}></div>
        </div>
        </div>
		);
}

export default Success;