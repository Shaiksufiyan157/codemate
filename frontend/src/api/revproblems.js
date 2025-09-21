import axios from "axios"
import { setProblems } from "../slices/problemSlice";
import { useSelector } from "react-redux";

const baseurl=`${import.meta.env.VITE_BACKEND_URL}/problems`;
export const getProblems=()=>async (dispatch,getState)=>{
      
    try{
const {token} =getState().problem
console.log(token)
        const {data}=await axios.get(baseurl,{
            headers:{
                Authorization: token,
            }
        })
        console.log(data);
        // const {problems}=data;
        // console.log(problems);
        // const problems=data.problems;
        dispatch(setProblems(data))
    }catch(err){  
        return err
     }
} 