export const ProblemReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_PROBLEM_STATEMENT':
            return {
                ...state,
                problem_statement: action.payload
            }

        case 'ADD_APPROACH1':
            return {
                ...state,
                approach1: action.payload
            }
        case 'ADD_APPROACH2':
            return {
                ...state,
                approach2: action.payload
            }
        case 'ADD_DS':
            return {
                ...state,
                ds: action.payload
            }
        case 'ADD_ALGO':
            return {
                ...state,
                algo: action.payload
            }
        case 'ADD_LINK':
            return {
                ...state,
                link: action.payload
            }
        case 'ADD_CODE':
            return {
                ...state,
                code: action.payload
            }
        case 'ON_SUBMIT':
            return {

                ...state,
                ds: '',
                algo: '',
                problem_statement: '',
                approach1: '',
                approach2: '',
                link: '',
                code: ''
            }
        default:
            {
                return state
            }
    }
}
