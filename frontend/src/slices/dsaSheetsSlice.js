import { createSlice } from "@reduxjs/toolkit";
import { dsasheetdata } from "../db";
const initialState={
    sheets:  []
}

const DsaSheetSlice=createSlice({
    name:'dsasheet',
    initialState,
    reducers:{
        addsheet:(state,action)=>{
            state.sheets.push(action.payload)
        }
    }
})

export const {addsheet}=DsaSheetSlice.actions;

export default DsaSheetSlice.reducer;