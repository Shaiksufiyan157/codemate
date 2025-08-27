import { createSlice } from "@reduxjs/toolkit";
const initialState={
    sheets: []
}

const DsaSheetSlice=createSlice({
    name:'dsasheet',
    initialState,
    reducers:{
        setSheets:(state,action)=>{
            state.sheets=action.payload;
        }
    }
})

export const {setSheets}=DsaSheetSlice.actions;

export default DsaSheetSlice.reducer;
