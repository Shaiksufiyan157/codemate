import axios from "axios"
import { setSheets } from "../slices/dsaSheetsSlice";

const baseurl=`${import.meta.env.VITE_BACKEND_URL}/sheets`;

export const getsheets=()=>async dispatch=>{
    
    try{
        const {data}=await axios.get(baseurl)
        dispatch(setSheets(data))
    }catch(err){  
        return err
     }
} 