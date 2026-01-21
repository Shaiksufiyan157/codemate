import { configureStore } from "@reduxjs/toolkit";
import ProblemReducer from '../slices/problemSlice'
import DsaSheetReducer from '../slices/dsaSheetsSlice'
import UserReducer from '../slices/userSlice'
export const store=configureStore({
    reducer:{
        problem:ProblemReducer,
        dsasheet:DsaSheetReducer,
        user:UserReducer
    }
})