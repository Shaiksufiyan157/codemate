import { createSlice } from "@reduxjs/toolkit"
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
        removeToken: (state) => {
            state.token = null;
            state.problems = [];
            localStorage.removeItem('token')
        },
        removeProblemFromList: (state, action) => {
            state.problems = state.problems.filter(p => p.id !== action.payload);
        }


    }
})

export const { addproblem, setDSValue, setAlgoValue, OnAllClick, setProblems, setToken, removeToken,removeProblemFromList } = PoblemSlice.actions

export default PoblemSlice.reducer;