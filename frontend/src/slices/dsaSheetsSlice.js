import { createSlice } from "@reduxjs/toolkit";
const initialState={
    sheets: JSON.parse(localStorage.getItem('dsasheets')) || []
}

const DsaSheetSlice=createSlice({
    name:'dsasheet',
    initialState,
    reducers:{
        addsheet:(state,action)=>{
            state.sheets=action.payload;
            localStorage.setItem('dsasheets', JSON.stringify(state.sheets));
            alert("dsa sheets added successfully")
        }
    }
})

export const {addsheet}=DsaSheetSlice.actions;

export default DsaSheetSlice.reducer;




        // addproblem:(state,action)=>{
        //     state.problems=[...state.problems,action.payload]
        //     localStorage.setItem('problems', JSON.stringify(state.problems));
        //     alert("new problem added successfully") 
        // },