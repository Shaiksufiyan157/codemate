import {createSlice} from "@reduxjs/toolkit"

const initialState={
   problems:[],
   datastructure:'',
   algo:'',
}

const PoblemSlice=createSlice({
    name:'probleminput',
    initialState,
    reducers:{
        addproblem:(state,action)=>{
            state.problems=[...state.problems,action.payload]
            localStorage.setItem('problems', JSON.stringify(state.problems));
            alert("new problem added successfully") 
        },
        setProblems:(state,action)=>{
            state.problems=action.payload
        },
        setDSValue:(state,action)=>{
            state.datastructure=action.payload
        },
        setAlgoValue:(state,action)=>{
            state.algo=action.payload
        },
        OnAllClick:()=>{
            state.problems=JSON.parse(localStorage.getItem('problems'))
        }
       
    }
})

export const {addproblem,setDSValue,setAlgoValue,OnAllClick,setProblems}=PoblemSlice.actions

export default PoblemSlice.reducer;