import axios from "axios"
import { setProblems } from "../slices/problemSlice";
import { useSelector } from "react-redux";

const baseurl=`${import.meta.env.VITE_BACKEND_URL}/problems`;
export const getProblems=()=>async (dispatch,getState)=>{
      
    try{
const {token} =getState().problem
        const {data}=await axios.get(baseurl,{
            headers:{
                Authorization: token,
            }
        })
        dispatch(setProblems(data))
    }catch(err){  
        return err
     }
} 