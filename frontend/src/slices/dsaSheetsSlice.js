import { createSlice } from "@reduxjs/toolkit";

const initialState={
    id:'',
    problems:[],
    name:''
}

const DsaSheetSlice=createSlice({
    name:'dsasheet',
    initialState,
    reducers:{
        addsheet:(state,action)=>{
            // state.\
        }
    }
})

export default DsaSheetSlice.reducer;