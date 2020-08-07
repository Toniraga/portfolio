import React from 'react'
import { Question } from "../../UI/Question/Question";
import { payload, answers } from '../../data/quiz'


const { payloadOne, payloadTwo, payloadThree } = payload;
const { answersOne, answersTwo, answersThree } = answers;

export const Questions1 = () => {
    return (
        <>
            <Question
                percentage={30}
                payload={payloadOne}
                link={"/q2"}
				answers={answersOne}
            />
        </>
	);
}

export const Questions2 = () => {
	return (
		<>
			<Question
				percentage={65}
				payload={payloadTwo}
				link={"/q3"}
				answers={answersTwo}
			/>
		</>
	);
};

export const Questions3 = () => {
	return (
		<>
			<Question
				percentage={100}
				payload={payloadThree}
				link={"/p2"}
				answers={answersThree}
			/>
		</>
	);
};
