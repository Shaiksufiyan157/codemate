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
    const { approach1, approach2, ds, algo, problem_statement,link,code } = state
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
      code:code
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
        
        {/* <div><Toaster/></div>
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
                     if (errors.prob_statement) setErrors((x) => ({ ...x, prob_statement: "" }));
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
                       
        </form> */}
        {/* --------------------------------------------- */}
        

        <form ref={formRef} onSubmit={handleSubmit}>

<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Add New Problem</h1>
          <p className="text-gray-600">Create a comprehensive problem entry with approach and solution</p>
        </div>

        <div><Toaster/></div>
        
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Problem Statement */}
            <div className="md:col-span-2">
              <label htmlFor="problemStatement" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
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
                 if (errors.prob_statement) setErrors((x) => ({ ...x, prob_statement: "" }));
                }
                }
                placeholder="Describe the problem statement..."
                minLength={5}
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-gray-300"
              />
              {errors.prob_statement && <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.prob_statement}
              </p>}
            </div>

            {/* Approach 1 */}
            <div className="md:col-span-2">
              <label htmlFor="approach1" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Approach (Paragraph 1)
              </label>
              <textarea
                id="approach1"
                rows={3}
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
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none"
              />
              {errors.approach && <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.approach}
              </p>}
            </div>

            {/* Approach 2 */}
            <div className="md:col-span-2">
              <label htmlFor="approach2" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Approach (Paragraph 2 – optional)
              </label>
              <textarea
                id="approach2"
                rows={3}
                value={approach2}
                onChange={(e) => dispatchProblem({
                    type: "ADD_APPROACH2",
                    payload: e.target.value
                })}
                placeholder="Second paragraph (optional)..."
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none"
              />
            </div>

            {/* Code Section */}
            <div className="md:col-span-2">
              <label htmlFor="code" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265L11.42 9l1.529 4.684a1 1 0 11-1.898.632L9.736 10h-1.14L7.281 14.316a1 1 0 01-1.898-.632L7.912 9 6.383 4.316a1 1 0 111.898-.632L9.596 8h1.14l1.315-4.684a1 1 0 011.265-.265z" clipRule="evenodd" />
                </svg>
                Solution Code
              </label>
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 bg-gray-800 text-white px-4 py-2 rounded-t-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="font-mono">solution.js</span>
                  </div>
                  <select className="bg-gray-700 text-white px-2 py-1 rounded text-xs border-none">
                    <option>JavaScript</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>C++</option>
                  </select>
                </div>
                <textarea
                  id="code"
                  rows={12}
                  placeholder="// Write your solution code here...
function solution() {
    // Your code implementation
    
}"
    onChange={(e) => {
                    dispatchProblem({
                        type: "ADD_CODE",
                        payload: e.target.value
                    })
                }}
                  className="mt-1 block w-full rounded-b-xl border-2 border-gray-200 px-4 py-3 pt-12 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none font-mono bg-gray-50"
                  style={{ fontFamily: 'Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace' }}
                />
              </div>
            </div>

            {/* Data Structures */}
            <div className="relative">
              <label htmlFor="ds" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
                Data Structures
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
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:border-gray-300"
              />
              <div className="absolute right-3 top-9 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              {errors.ds && <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.ds}
              </p>}
            </div>

            {/* Algorithms */}
            <div className="relative">
              <label htmlFor="algo" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Algorithms
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
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200 hover:border-gray-300"
              />
              <div className="absolute right-3 top-9 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              {errors.algo && <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.algo}
              </p>}
            </div>

            {/* Problem Link */}
            <div className="md:col-span-2 relative">
              <label htmlFor="link" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
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
                className="mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-gray-300"
              />
              <div className="absolute right-3 top-9 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              {errors.link && <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.link}
              </p>}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex items-center justify-center pt-6">
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Save Problem
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>



























































        {/* --------------------------------- */}
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