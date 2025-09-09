import { useReducer, useRef, useState } from 'react';
import { ProblemReducer } from '../../reducers/problemsReducer';
import { useDispatch } from 'react-redux';
import { addproblem } from "../../slices/problemSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { getProblems } from '../../api/revproblems';
import toast,{Toaster} from 'react-hot-toast'
export const InputData = () => {


    const ProbStatemRef = useRef();
    const approach1Ref = useRef();
    const dsRef = useRef();
    const algoRef = useRef();
    const formRef = useRef();
    const linkRef=useRef()

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const initialState = {
        approach1: '',
        approach2: '',
        ds: '',
        algo: '',
        problem_statement: '',
        link:''
    }

    const [state, dispatchProblem] = useReducer(ProblemReducer, initialState);
    const { approach1, approach2, ds, algo, problem_statement,link } = state
    const [errors, setErrors] = useState({ ds: "", algo: "" ,prob_statement:"",approach:"",link:""});

    const form = formRef.current;
    if (form && !form.checkValidity()) {
        form.reportValidity();
        return;
    }

const loadnewProblems=async()=>{
    await dispatch(getProblems())
}

    const handleSubmit = (event) => {
        // if(!problem_statement || !algo || !ds || !link || !approach1 || !approach2 )

        event.preventDefault();
        console.log(state)
    if(problem_statement.length==0){
        setErrors({ prob_statement: "Enter the problem statement", algo: "" ,ds:"",approach:""});
        ProbStatemRef.current?.focus();
        return
    }
            
    if(approach1.length==0){
        setErrors({ approach: "Enter your approach.", algo: "" ,ds:"",prob_statement:""});
        approach1Ref.current?.focus();
        return
    }
    if (ds.length === 0) {
        setErrors({ ds: "Enter at least one data structure.",  algo: "" ,prob_statement:"",approach:"" });
        dsRef.current?.focus();
        return;
    }
    if (algo.length === 0) {
        setErrors({ ds: "" ,prob_statement:"",approach:"",algo: "Enter at least one algorithm." });
        algoRef.current?.focus();
        return;
    }
        if (link.length === 0) {
        setErrors({ ds: "" ,prob_statement:"",approach:"",algo: "",link:"Enter the problem link." });
        linkRef.current?.focus();
        return;
    }
    const newProblem = {
      id: uuid(),
      problem_statement: problem_statement.trim(),
      approach_1: approach1,
      approach_2:approach2,
      ds: ds,
      link:link,
      algo: algo,
    };
    console.log(newProblem)
    dispatch(addproblem(newProblem))
     dispatchProblem({
            type:'ON_SUBMIT'
        })
        loadnewProblems()
    // navigate('/problems')
    toast.success('Successfully problem added!')

    };


    return (
        <>
        <div><Toaster/></div>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/95 rounded-lg p-4">
            <div className="md:col-span-2">
                <label htmlFor="problemStatement" className="block text-sm font-medium text-gray-700">
                    Problem Statement
                </label>
                <input
                    id="problemStatement"
                    type="text"
                    value={problem_statement}
                    ref={ProbStatemRef}
                    onChange={(e) =>{
                        dispatchProblem({
                            type: "ADD_PROBLEM_STATEMENT",
                            payload: e.target.value
                        })
                     if (errors.ds) setErrors((x) => ({ ...x, prob_statement: "" }));
                    }
                    }
                    placeholder="Describe the problem statement..."
                    minLength={5}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none ${errors.prob_statement? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.prob_statement && <p className="mt-1 text-xs text-red-600">{errors.prob_statement}</p>}
            </div>

            <div className="md:col-span-2">
                <label htmlFor="approach1" className="block text-sm font-medium text-gray-700">
                    Approach (Paragraph 1)
                </label>
                <textarea
                    id="approach1"
                    rows={2}
                    ref={approach1Ref}
                    value={approach1}
                    onChange={(e) =>{ 
                        dispatchProblem({
                        type: "ADD_APPROACH1",
                        payload: e.target.value
                    })
                    if (errors.approach) setErrors((x) => ({ ...x,approach: "" }));
                }}
                    placeholder="Write the first paragraph of your approach..."
                    minLength={5}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none ${errors.approach ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.approach && <p className="mt-1 text-xs text-red-600">{errors.approach}</p>}
            </div>

            <div className="md:col-span-2">
                <label htmlFor="approach2" className="block text-sm font-medium text-gray-700">
                    Approach (Paragraph 2 – optional)
                </label>
                <textarea
                    id="approach2"
                    rows={2}
                    value={approach2}
                    onChange={(e) => dispatchProblem({
                        type: "ADD_APPROACH2",
                        payload: e.target.value
                    })}
                    placeholder="Second paragraph (optional)..."
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                />
            </div>

            <div>
                <label htmlFor="ds" className="block text-sm font-medium text-gray-700">
                    Data Structures (comma-separated)
                </label>
                <input
                    id="ds"
                    type="text"
                    value={ds}
                    ref={dsRef}
                    onChange={(e) => {
                        dispatchProblem({
                            type: "ADD_DS",
                            payload: e.target.value
                        })
                        if (errors.ds) setErrors((x) => ({ ...x, ds: "" }));
                    }}
                    placeholder="e.g., Array, Hash Map, Heap"
                    className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none ${errors.ds ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.ds && <p className="mt-1 text-xs text-red-600">{errors.ds}</p>}
            </div>

            <div>
                <label htmlFor="algo" className="block text-sm font-medium text-gray-700">
                    Algorithms (comma-separated)
                </label>
                <input
                    id="algo"
                    type="text"
                    value={algo}
                    ref={algoRef}
                    onChange={(e) => {
                        dispatchProblem({
                            type: "ADD_ALGO",
                            payload: e.target.value
                        })
                        if (errors.algo) setErrors((x) => ({ ...x, algo: "" }));
                    }}
                    placeholder="e.g., Binary Search, DP, BFS"

                    className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none ${errors.algo ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.algo && <p className="mt-1 text-xs text-red-600">{errors.algo}</p>}
            </div>

                        <div>
                <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                    Problem Link
                </label>
                <input
                    id="link"
                    type="text"
                    value={link}
                    ref={linkRef}
                    onChange={(e) => {
                        dispatchProblem({
                            type: "ADD_LINK",
                            payload: e.target.value
                        })
                        if (errors.link) setErrors((x) => ({ ...x, link: "" }));
                    }}
                    placeholder="Add problem link from platform like LeetCode"

                    className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none ${errors.link ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.link && <p className="mt-1 text-xs text-red-600">{errors.link}</p>} 
            </div>

            <div className="md:col-span-2 flex items-center md:flex-row flex-col gap-3">
                <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-[#316878] px-4 py-2 text-sm font-medium text-white shadow"
                >
                    Save Problem
                </button>

            </div>
                       
        </form>
        {/* <span className='border-2 inline' onClick={()=>{navigate('/problems')}}>
                go to problems
                </span>
                 <span className='border-2'>
                go to problems
                </span> */}
        {/* <div>

 
        </div> */}
{/* <span className="border-2 inline">I stay inline</span> */}
        {/* <span className='border-2'>he</span> */}
        {/* <p className='border-2'>hl</p> */}
                {/* <span className="border-2 inline-block px-2">I stay inline</span> */}
        
        </>
    );
}