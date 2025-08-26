import { createSlice } from "@reduxjs/toolkit";
const initialState={
    sheets: []
}

const DsaSheetSlice=createSlice({
    name:'dsasheet',
    initialState,
    reducers:{
        setSheets:(state,action)=>{
            console.log("dsa sheets added successfully")
            state.sheets=action.payload;
            // console
            console.log("dsa sheets added successfully")
        }
    }
})

export const {setSheets}=DsaSheetSlice.actions;

export default DsaSheetSlice.reducer;
