import Button from "@mui/material/Button";
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
    <>
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
  <h1 className="text-xl font-semibold text-white">Problems</h1>
  <Button onClick={OnAddProblemClick} sx={{ color: "black", backgroundColor: "white" }}>
    add problem
  </Button>

  <div className="flex flex-wrap gap-3 w-full sm:w-auto">
    <label className="w-full sm:w-60">
      <span className="block text-sm text-white mb-1">Data Structure</span>
      <select
        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
        onChange={OnDSChange}
      >
        <option selected>
          All
        </option>
        <option>Array</option>
        <option>Heap</option>
        <option>Linked List</option>
        <option>Graph (Adjacency List)</option>
        <option>Stack</option>
      </select>
    </label>

    <label className="w-full sm:w-60">
      <span className="block text-sm text-white mb-1">Algorithm</span>
      <select
        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
        onChange={OnAlgoChange}
      >
        <option selected>
          All
        </option>
        <option>Merge Sort</option>
        <option>Insertion Sort</option>
        <option>DFS</option>
        <option>Cycle Detection</option>
        <option>Binary Search</option>

      </select>
    </label>
  </div>
</div>
   </>
  )

}