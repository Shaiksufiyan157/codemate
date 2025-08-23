export const ProblemReducer=(state,action)=>{
    switch(action.type){
        
        case 'ADD_PROBLEM_STATEMENT':
            return{
                ...state,
                problemStatement:action.payload
            }
        
        case 'ADD_APPROACH1':
            return{
                ...state,
                approach1:action.payload    
            }
        case 'ADD_APPROACH2':
            return{
                ...state,
                approach2:action.payload    
            }
        case 'ADD_DS':
            return{
                ...state,
                ds:action.payload    
            }
        case 'ADD_ALGO':
            return{
                ...state,
                algo:action.payload    
            }
        case 'ON_SUBMIT':
            return{
            ...state,
                ds:'',
                algo:'',
                problemStatement:'',
                approach1:'',
                approach2:''
        }
        default:
            {
                return state
            }
    }
}
