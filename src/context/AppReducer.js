export default (state, action) => {
    switch(action.type) {
        case 'SELECT_OPTION':
            return {
                ...state,
                selectOption: action.payload,
            }
        
        case 'SUBMIT_ANSWER':
            const valid = 2
            const selected = state.selectOption
            let count = state.scoreCount
            return {
                ...state,
                scoreCount: selected === valid ? count + 1 : count
            }

        case "SET_COUNT":
            return {
                ...state,
                scoreCount: 0,
            }

        case "SET_AUTH": 
            return {
                ...state,
                authenticated: true
            }

        default: 
            return state
    }
}