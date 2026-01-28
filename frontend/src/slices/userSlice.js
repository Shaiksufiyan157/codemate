import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{
    username:"",
    email:""
    }
   
}

const UserSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
    setUserInfo:(state,action)=>{
        console.log(action.payload)
        state.user=action.payload
    }
    }
   
})

export const {setUserInfo}=UserSlice.actions

export default UserSlice.reducer