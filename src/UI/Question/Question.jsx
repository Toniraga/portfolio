import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState'

import { ProgressBar } from '../Progress/Progress'
import { Answer } from './Answer/Answer';
import classes from './Question.module.css'

export const Question = (props) => {
    const { onSelectOption, onSubmitAnswer } = useContext(GlobalContext);
    const btnRef = useRef()
    const { percentage, payload, link, answers } = props;


    const fullAnswers = answers.map(answer => (
        <Answer
            key={answer.id}
            btnRef={btnRef}
            answer={answer.name}
            id={answer.id}
            clicked={onSelectOption}
        />
    ))

    return (
        <div className={classes.Question}>
            <div>
                <div className={classes.cheers}>
                    {payload.cheers}
                    <span role="img" aria-label="emoji">
                        🥦🌍
                    </span>
                </div>
                <div className={classes.question}> 
                    {payload.question} 
                </div>
                <div className={classes.answers}>
                    {fullAnswers}
                </div>
                <Link 
                    to={link} 
                    onClick={() => onSubmitAnswer()}
                    >
                    <button
                        className={classes.btn} 
                        disabled
                        ref={btnRef}>
                        NEXT
                    </button>
                </Link>
                <div className={classes.progress}>
                    <ProgressBar percentage={percentage} />
                </div>
            </div>
        </div>
	);
}