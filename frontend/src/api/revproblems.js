import axios from "axios"
import { setProblems } from "../slices/problemSlice";

const baseurl=`${import.meta.env.VITE_BACKEND_URL}/problems`;

export const getProblems=()=>async dispatch=>{
    
    try{
        const {data}=await axios.get(baseurl)
        dispatch(setProblems(data))
    }catch(err){  
        return err
     }
} 