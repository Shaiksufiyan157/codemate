import axios from "axios"
import { setProblems } from "../slices/problemSlice";
// import { useSelector } from "react-redux";

const baseurl=`${import.meta.env.VITE_BACKEND_URL}/problems`;
// const {problems}=useSelector(state=>state.problem)
export const getProblems=()=>async dispatch=>{
    
    try{

        const {data}=await axios.get(baseurl)
        dispatch(setProblems(data))
    }catch(err){  
        return err
     }
} 