import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    problems: [],
    datastructure: '',
    algo: '',
}

const PoblemSlice = createSlice({
    name: 'probleminput',
    initialState,
    reducers: {
        addproblem: (state, action) => {
            const url = `${import.meta.env.VITE_BACKEND_URL}/problem`
            const data=action.payload
            console.log(data)
            axios.post(url, data,{
                headers:{
                    Authorization: localStorage.getItem('token')
                }
            })
                .then(response => {
                    console.log('Problem added:', response.data);
                })
                .catch(error => {
                    console.error('Error adding problem:', error);
                });
        },
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
        }

    }
})

export const { addproblem, setDSValue, setAlgoValue, OnAllClick, setProblems } = PoblemSlice.actions

export default PoblemSlice.reducer;