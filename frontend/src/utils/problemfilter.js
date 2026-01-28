export const getFilterByDs=(Problems,value)=>{
    if(!value) return Problems;

    if(value==="All") return Problems
    const filterProblems=value?.length>0? (Problems?.length>0 && Problems.filter(item=>item.ds.includes(value))): Problems
    return filterProblems;
}

export const getFilterByAlgo=(Problems,value)=>{
    if(!value) return Problems;
    if(value==="All") return Problems
    const filterProblems=value?.length>0 ? (Problems?.length>0 && Problems.filter(item=>item.algo.includes(value))): Problems

    return filterProblems;
    
}


export const getrandomuniquenumbs=(arr)=>{
  if(arr.length==0) return null;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr.splice(randomIndex, 1)[0];
} 