import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    problems: [],
    datastructure: '',
    algo: '',
    token: localStorage.getItem('token')
}

const PoblemSlice = createSlice({
    name: 'probleminput',
    initialState,
    reducers: {
        setProblems: (state, action) => {
            state.problems = action.payload
        },
        setDSValue: (state, action) => {
            state.datastructure = action.payload
        },
        setAlgoValue: (state, action) => {
            state.algo = action.payload
        },
        OnAllClick: () => {
            state.problems = JSON.parse(localStorage.getItem('problems'))
        },
        setToken: (state, action) => {
            
            state.token = action.payload;
        },
        removeToken: (state, action) => {
            state.token = null;
            state.problems = [];
            localStorage.removeItem('token')
        }


    }
})

export const { addproblem, setDSValue, setAlgoValue, OnAllClick, setProblems, setToken, removeToken } = PoblemSlice.actions

export default PoblemSlice.reducer;