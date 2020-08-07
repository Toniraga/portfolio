import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// InitialState
const initialState = {
	selectOption: null,
	scoreCount: 0,
	authenticated: false
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(AppReducer ,initialState)
	
	const onSelectOption = (id) => {
		dispatch({
			type: "SELECT_OPTION",
			payload: id
		})
	}

	const onSubmitAnswer = () => {
		dispatch({
			type: "SUBMIT_ANSWER"
		})
	}

	const redirected = () => {
		dispatch({
			type: "SET_COUNT"
		})
	}

	const authenticate = () => {
		dispatch({
			type: "SET_AUTH"
		})
	}

    return (
        <GlobalContext.Provider value={{
			scoreCount: state.scoreCount,
			onSelectOption,
			onSubmitAnswer,
			redirected,
			authenticate,
			authenticated: state.authenticated
        }}>
            {children}
        </GlobalContext.Provider>
    )
}