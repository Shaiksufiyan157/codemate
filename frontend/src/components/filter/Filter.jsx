import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setDSValue ,setAlgoValue} from "../../slices/problemSlice";
export const Filter = () => {
  const navigate = useNavigate()
  const OnAddProblemClick = () => {
    navigate('/addproblem')
  }

  const dispatch=useDispatch();
  const {problems}=useSelector(state=>state.problem)
  const OnDSChange=(e)=>{
    dispatch(setDSValue(e.target.value));
  }

  const OnAlgoChange=(e)=>{
    dispatch(setAlgoValue(e.target.value))
  }

  return (
    <div className="bg-indigo-900 rounded-t-xl p-6 shadow-sm">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Title & Action */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Problem Solver
          </h1>
          <button 
            onClick={OnAddProblemClick}
            className="px-4 py-2 bg-white text-indigo-900 text-sm font-semibold rounded-lg hover:bg-indigo-50 transition-colors shadow-sm"
          >
            + Add Problem
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 w-full sm:w-auto">
          <div className="w-full sm:w-48">
            <label className="block text-xs font-medium text-indigo-200 mb-1 uppercase tracking-wider">
              Data Structure
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded-lg border border-indigo-700 bg-indigo-800/50 px-4 py-2.5 text-sm text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white cursor-pointer"
                onChange={OnDSChange}
                defaultValue="All"
              >
                <option value="All">All Structures</option>
                <option value="Array">Array</option>
                <option value="Heap">Heap</option>
                <option value="Linked List">Linked List</option>
                <option value="Graph">Graph (Adjacency List)</option>
                <option value="Stack">Stack</option>
              </select>
              {/* Custom Arrow Pointer */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-300">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-48">
            <label className="block text-xs font-medium text-indigo-200 mb-1 uppercase tracking-wider">
              Algorithm
            </label>
            <div className="relative">
              <select
                className="block w-full appearance-none rounded-lg border border-indigo-700 bg-indigo-800/50 px-4 py-2.5 text-sm text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white cursor-pointer"
                onChange={OnAlgoChange}
                defaultValue="All"
              >
                <option value="All">All Algorithms</option>
                <option value="Merge Sort">Merge Sort</option>
                <option value="Insertion Sort">Insertion Sort</option>
                <option value="DFS">DFS</option>
                <option value="Cycle Detection">Cycle Detection</option>
                <option value="Binary Search">Binary Search</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-300">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}