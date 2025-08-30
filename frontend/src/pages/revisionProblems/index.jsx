import { RevisionProblemCard } from "../../components/content-table/RevisionProbComp"
import { RevisionProblemMobile } from "../../components/content-table/RevisionProblemMobile"
import { getFilterByAlgo,getFilterByDs } from "../../utils/problemfilter"
import { useSelector ,useDispatch} from "react-redux"
import { Filter } from "../../components/filter/Filter"
import { useEffect ,useState} from "react"
import { getProblems } from "../../api/revproblems"
import Loading from "../../components/utils/Loading"
export const RevisionProblemPage=()=>{

    const dispatch=useDispatch();
    const { problems, datastructure, algo } = useSelector(state => state.problem)
   const [loading, setLoading] = useState(() => !problems || problems.length === 0);
    useEffect(()=>{
        const loadproblems=async()=>{

            if(!problems || problems.length===0)
            await dispatch(getProblems())
          setLoading(false)
        }
        loadproblems()
    },[])

    console.log(problems)

  const FilterByDs = getFilterByDs(problems, datastructure)
  const FilterByAlgo = getFilterByAlgo(FilterByDs, algo)
    return(
        <>
   {loading?<Loading/>: <main className="w-full max-w-[90%] mx-auto p-6 bg-[#3A0CA3] rounded-lg shadow-lg mt-3">
            <Filter className="w-full sm:w-auto" />
              <div className="hidden md:block mt-4 overflow-x-auto border border-gray-200 rounded-lg bg-white">
                <table className="min-w-full text-left text-base border-separate" style={{ borderSpacing: 0 }}>
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-lg">Approach</th>
                      <th className="px-6 py-4 text-lg">Data Structures</th>
                      <th className="px-6 py-4 text-lg">Algorithms</th>
                      <th className="px-6 py-4 text-lg">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FilterByAlgo.map((problem ,idx) => (
                        <RevisionProblemCard key={problem.id} idx={idx}problem={problem}/>
                    ))}
                  </tbody>
                </table>
              </div>
        
              {/* Mobile/Card view */}
              <div className="md:hidden mt-4 space-y-4 ">
                {FilterByAlgo.map((problem,idx) => (
        
                <RevisionProblemMobile key={problem.id} idx={idx} problem={problem}/>
                ))}
              </div>
              </main>
}
            </>
        
    )
}

        
