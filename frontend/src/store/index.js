import { configureStore } from "@reduxjs/toolkit";
import ProblemReducer from '../slices/problemInputSlice'

export const store=configureStore({
    reducer:{
        problem:ProblemReducer
    }
})