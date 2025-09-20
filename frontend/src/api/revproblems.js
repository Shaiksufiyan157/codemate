import axios from "axios"
import { setProblems } from "../slices/problemSlice";
// import { useSelector } from "react-redux";

const baseurl=`${import.meta.env.VITE_BACKEND_URL}/problems`;
// const {problems}=useSelector(state=>state.problem)
const token = localStorage.getItem('token');
export const getProblems=()=>async dispatch=>{
      
    try{

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