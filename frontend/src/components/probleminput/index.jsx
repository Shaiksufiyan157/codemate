import { useReducer, useRef, useState } from 'react';
import { ProblemReducer } from '../../reducers/problemsReducer';
import { useDispatch } from 'react-redux';
import { addproblem } from "../../slices/problemSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export const InputData = () => {


    const ProbStatemRef = useRef();
    const approach1Ref = useRef();
    const dsRef = useRef();
    const algoRef = useRef();
    const formRef = useRef();

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const initialState = {
        approach1: '',
        approach2: '',
        ds: '',
        algo: '',
        problemStatement: ''
    }

    const [state, dispatchProblem] = useReducer(ProblemReducer, initialState);
    const { approach1, approach2, ds, algo, problemStatement } = state
    const [errors, setErrors] = useState({ ds: "", algo: "" ,probstate:"",approach:""});

    const form = formRef.current;
    if (form && !form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const parseList = (str) =>
        str
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
    const dsList = parseList(ds);
    const algoList = parseList(algo);



    const handleSubmit = (event) => {

        dispatchProblem({
            type:'ON_SUBMIT'
        })
        event.preventDefault();
        console.log(state)
    if(problemStatement.length==0){
        setErrors({ probstate: "Enter the problem statement", algo: "" ,ds:"",approach:""});
        ProbStatemRef.current?.focus();
        return
    }
            
    if(approach1.length==0){
        setErrors({ approach: "Enter your approach.", algo: "" ,ds:"",probstate:""});
        approach1Ref.current?.focus();
        return
    }
    if (dsList.length === 0) {
        setErrors({ ds: "Enter at least one data structure.",  algo: "" ,probstate:"",approach:"" });
        dsRef.current?.focus();
        return;
    }
    if (algoList.length === 0) {
        setErrors({ ds: "" ,probstate:"",approach:"",algo: "Enter at least one algorithm." });
        algoRef.current?.focus();
        return;
    }
    const newProblem = {
      id: uuid(),
      ProblemStatement: problemStatement.trim(),
      Approach: approach2.trim().length > 0 ? [approach1.trim(), approach2.trim()] : [approach1.trim()],
      DataStructure: dsList,
      Algo: algoList,
    };

    dispatch(addproblem({problem:newProblem}))
    navigate('/problems')

    };


    return (
        <form ref={formRef} onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/95 rounded-lg p-4">
            <div className="md:col-span-2">
                <label htmlFor="problemStatement" className="block text-sm font-medium text-gray-700">
                    Problem Statement
                </label>
                <input
                    id="problemStatement"
                    type="text"
                    value={problemStatement}
                    ref={ProbStatemRef}
                    onChange={(e) =>{
                        dispatchProblem({
                            type: "ADDPROBLEMSTATE",
                            payload: e.target.value
                        })
                     if (errors.ds) setErrors((x) => ({ ...x, probstate: "" }));
                    }
                    }
                    placeholder="Describe the problem statement..."
                    minLength={5}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 text-sm focus:outline-none ${errors.probstate ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {errors.probstate && <p className="mt-1 text-xs text-red-600">{errors.probstate}</p>}
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
                    onChange={(e) =>{ dispatchProblem({
                        type: "ADDAPPROACH1",
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
                        type: "ADDAPPROACH2",
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

            <div className="md:col-span-2 flex items-center gap-3">
                <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-[#316878] px-4 py-2 text-sm font-medium text-white shadow"
                >
                    Save Problem
                </button>
            </div>
        </form>
    );
}