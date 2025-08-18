// import { Problems } from "../components/content-table";

export const getFilterByDs=(Problems,value)=>{
    if(!value) return Problems;
    if(value==="All") return Problems
    const filterProblems=value?.length>0? (Problems?.length>0 && Problems.filter(item=>item.problem.DataStructure.includes(value))): Problems
    return filterProblems;
}

export const getFilterByAlgo=(Problems,value)=>{
    if(!value) return Problems;
    if(value==="All") return Problems
    const filterProblems=value?.length>0 ? (Problems?.length>0 && Problems.filter(item=>item.problem.Algo.includes(value))): Problems

    return filterProblems;
    
}