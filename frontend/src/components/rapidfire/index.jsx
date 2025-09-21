import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const RapidProblemCard=({problem_statement,onNextClick,onBackClick})=>{
    const {token}=useSelector(state => state.problem)
    const navigate=useNavigate()
    useEffect(()=>{
      if(!token){
        navigate('/login')
      }
      alert('jfkew')
    },[token])
    return(
        <>
          {/* <h1>Welcome to Rapid fire</h1> */}
        <div className="flex justify-center flex-col border">
         <div>
              <h1 className="font-bold p-3 mt-10 bg-blue-200 rounded-2xl text-center"> {problem_statement}</h1>
         </div >
           <div className="w-full flex items-center justify-center mt-2">
            <button className="bg-blue-400 text-slate px-4 py-2 font-medium rounded-lg hover:cursor-pointer mr-10 text-white" onClick={onBackClick}>back</button>
            <button className=" bg-blue-400 text-slate px-4 py-2 font-medium rounded-lg hover:cursor-pointer text-white" onClick={onNextClick}>next</button>
           </div>
            </div>
        </>
    )
}