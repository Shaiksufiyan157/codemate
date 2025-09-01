import { getrandomuniquenumbs } from "../../utils/problemfilter";
import { useSelector ,useDispatch} from "react-redux";
import { useEffect ,useState} from "react";
import { getProblems } from "../../api/revproblems";
import { RapidProblemCard } from "../../components/rapidfire";
import Loading from "../../components/utils/Loading"

const arr=[]
const rand=[]
for(let i=0;i<100;i++){
    arr.push(i);
}
for(let i=0;i<100;i++){
    rand.push(getrandomuniquenumbs(arr))
}
export const RapidFire=()=>{
    

    const [index,setIndex]=useState(0);
    const dispatch = useDispatch();
 const { problems, algo } = useSelector(state => state.problem);

        useEffect(()=>{
            const loadproblems=async()=>{
    
                if(!problems || problems.length===0)
                await dispatch(getProblems())
              setLoading(false)
            }
            loadproblems()
        },[])
   const [loading, setLoading] = useState(() => !problems || problems.length === 0);
        const onNextClick=()=>{
            if(index>=problems.length-1) return
           setIndex(index+1)
        }
        const onBackClick=()=>{
           index<=0?setIndex(0):setIndex(index-1)
        }
console.log('Redux problem state:', problems, algo);

    return(
        <>
        {
            // rand.map((idx)=>(
                // <h1>{problems[idx].problem_statement}</h1>
                
            // ))
            
        }
        
      {loading?<Loading/>:problems?.length>0 && <RapidProblemCard problem_statement={problems[rand[index]].problem_statement} onNextClick={onNextClick} onBackClick={onBackClick}/>}


        </>
    )
}