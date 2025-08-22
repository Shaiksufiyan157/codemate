export const ProblemReducer=(state,action)=>{
    switch(action.type){
        
        case 'ADDPROBLEMSTATE':
            return{
                ...state,
                problemStatement:action.payload
            }
        
        case 'ADDAPPROACH1':
            return{
                ...state,
                approach1:action.payload    
            }
        case 'ADDAPPROACH2':
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

//  const initialState={
//     approach1:'',
//     approach2:'',
//     ds:'',
//     algo:'',
//     problemStatement:''
//  }