import { useReducer, useRef, useState } from 'react';
import { ProblemReducer } from '../../reducers/problemsReducer';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from "uuid";
import { getProblems } from '../../api/revproblems';
import toast from 'react-hot-toast';
import axios from 'axios';

export const InputData = () => {

  const ProbStatemRef = useRef();
  const approach1Ref = useRef();
  const dsRef = useRef();
  const algoRef = useRef();
  const linkRef = useRef();

  const dispatch = useDispatch();
  const initialState = {
    approach1: '',
    approach2: '',
    ds: '',
    algo: '',
    problem_statement: '',
    link: '',
    code: ''
  }

  const [state, dispatchProblem] = useReducer(ProblemReducer, initialState);
  const { approach1, approach2, ds, algo, problem_statement, link, code } = state
  const [errors, setErrors] = useState({ ds: "", algo: "", prob_statement: "", approach: "", link: "" });


  const [useAiMode, setUseAiMode] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiInputData, setAiInputData] = useState({ code: '', link: '' });



  const addNewProblem = async (problem) => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/problem`
    const data = problem;
    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      dispatch(getProblems())

    } catch (error) {
      toast.error("something went wrong")
    }

  }
  const handleAiGeneration = async () => {
    if (!aiInputData.code || !aiInputData.link) {
      toast.error("Please provide both Code and Link for AI generation");
      return;
    }

    setAiLoading(true);
    const url = `${import.meta.env.VITE_BACKEND_URL}/ai`;

    const payload = {
      userCode: aiInputData.code,
      userContext: aiInputData.link
    };

    try {
      const { data } = await axios.post(url, payload);
      if(data["error"]){
        toast.error(data["error"])
        setAiInputData.code=''
        return;
      }

      dispatchProblem({ type: "ADD_PROBLEM_STATEMENT", payload: data.problem_statement || "" });
      dispatchProblem({ type: "ADD_APPROACH1", payload: data.approach_1 || "" });

      dispatchProblem({ type: "ADD_APPROACH2", payload: data.approach_2 || "" });

      const dsValue = Array.isArray(data.ds) ? data.ds.join(", ") : (data.ds || "");
      const algoValue = Array.isArray(data.algo) ? data.algo.join(", ") : (data.algo || "");

      dispatchProblem({ type: "ADD_DS", payload: dsValue });
      dispatchProblem({ type: "ADD_ALGO", payload: algoValue });


      dispatchProblem({ type: "ADD_CODE", payload: aiInputData.code });
      dispatchProblem({ type: "ADD_LINK", payload: aiInputData.link });

      toast.success("Form populated successfully!");

    } catch (error) {
      toast.error("somethng went wrong")
    } finally {
      setAiLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (problem_statement.length == 0) {
      setErrors({ prob_statement: "Enter the problem statement", algo: "", ds: "", approach: "" });
      ProbStatemRef.current?.focus();
      return
    }

    if (approach1.length == 0) {
      setErrors({ approach: "Enter your approach.", algo: "", ds: "", prob_statement: "" });
      approach1Ref.current?.focus();
      return
    }
    if (ds.length === 0) {
      setErrors({ ds: "Enter at least one data structure.", algo: "", prob_statement: "", approach: "" });
      dsRef.current?.focus();
      return;
    }
    if (algo.length === 0) {
      setErrors({ ds: "", prob_statement: "", approach: "", algo: "Enter at least one algorithm." });
      algoRef.current?.focus();
      return;
    }
    if (link.length === 0) {
      setErrors({ ds: "", prob_statement: "", approach: "", algo: "", link: "Enter the problem link." });
      linkRef.current?.focus();
      return;
    }
    const newProblem = {
      id: uuid(),
      problem_statement: problem_statement.trim(),
      approach_1: approach1,
      approach_2: approach2,
      ds: ds,
      link: link,
      algo: algo,
      code: code
    };
    addNewProblem(newProblem)
    dispatchProblem({ type: 'ON_SUBMIT' })
    setAiInputData({ code: '', link: '' });
    toast.success('Successfully problem added!')
  };


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">

        {/* Toggle AI Mode Button */}
        <div className="max-w-7xl mx-auto flex justify-end mb-4">
          <button
            onClick={() => setUseAiMode(!useAiMode)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold shadow-sm transition-all duration-300 ${useAiMode
              ? "bg-purple-600 text-white shadow-purple-200"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
          >
            <svg className={`w-5 h-5 ${useAiMode ? "animate-pulse" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {useAiMode ? "AI Mode Active" : "Use AI Assistant"}
          </button>
        </div>

        {/* Layout Container: Switches between Single Column (Centered) and Two Column (Grid) */}
        <div className={`mx-auto transition-all duration-500 ${useAiMode ? "max-w-full grid grid-cols-1 lg:grid-cols-2 gap-8" : "max-w-4xl"}`}>

          {/* LEFT SIDE: The Main Problem Form */}
          <div className="flex flex-col">
            <div className={`text-center mb-8 ${useAiMode ? "lg:text-left" : ""}`}>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {useAiMode ? "Problem Entry" : "Add New Problem"}
              </h1>

              <p className="text-gray-600">Review and edit the problem details below</p>
            </div>



            <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 flex-1">
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
                    onChange={(e) => {
                      dispatchProblem({ type: "ADD_PROBLEM_STATEMENT", payload: e.target.value })
                      if (errors.prob_statement) setErrors((x) => ({ ...x, prob_statement: "" }));
                    }}
                    placeholder="Describe the problem statement..."
                    className="mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                  />
                  {errors.prob_statement && <p className="mt-2 text-xs text-red-600">{errors.prob_statement}</p>}
                </div>

                {/* Approach 1 */}
                <div className="md:col-span-2">
                  <label htmlFor="approach1" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Approach (Paragraph 1)
                  </label>
                  <textarea
                    id="approach1"
                    rows={3}
                    ref={approach1Ref}
                    value={approach1}
                    onChange={(e) => {
                      dispatchProblem({ type: "ADD_APPROACH1", payload: e.target.value })
                      if (errors.approach) setErrors((x) => ({ ...x, approach: "" }));
                    }}
                    placeholder="Write the first paragraph of your approach..."
                    className="mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none"
                  />
                  {errors.approach && <p className="mt-2 text-xs text-red-600">{errors.approach}</p>}
                </div>

                {/* Approach 2 */}
                <div className="md:col-span-2">
                  <label htmlFor="approach2" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Approach (Paragraph 2 – optional)
                  </label>
                  <textarea
                    id="approach2"
                    rows={3}
                    value={approach2}
                    onChange={(e) => dispatchProblem({ type: "ADD_APPROACH2", payload: e.target.value })}
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
                    {/* Window Controls Decoration */}
                    <div className="absolute top-0 left-0 right-0 bg-gray-800 text-white px-4 py-2 rounded-t-xl flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <span className="font-mono">solution</span>
                      </div>
                    </div>
                    <textarea
                      id="code"
                      rows={12}
                      placeholder="// Code will appear here..."
                      value={code}
                      onChange={(e) => dispatchProblem({ type: "ADD_CODE", payload: e.target.value })}
                      className="mt-1 block w-full rounded-b-xl border-2 border-gray-200 px-4 py-3 pt-12 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none font-mono bg-gray-50"
                      style={{ fontFamily: 'Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace' }}
                    />
                  </div>
                </div>

                {/* Data Structures & Algo */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">Data Structures</label>
                  <input
                    type="text"
                    value={ds}
                    ref={dsRef}
                    onChange={(e) => {
                      dispatchProblem({ type: "ADD_DS", payload: e.target.value });
                      if (errors.ds) setErrors((x) => ({ ...x, ds: "" }));
                    }}
                    placeholder="e.g., Array, Hash Map"
                    className="mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
                  />
                  {errors.ds && <p className="mt-2 text-xs text-red-600">{errors.ds}</p>}
                </div>

                <div className="relative">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">Algorithms</label>
                  <input
                    type="text"
                    value={algo}
                    ref={algoRef}
                    onChange={(e) => {
                      dispatchProblem({ type: "ADD_ALGO", payload: e.target.value })
                      if (errors.algo) setErrors((x) => ({ ...x, algo: "" }));
                    }}
                    placeholder="e.g., Binary Search"
                    className="mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  />
                  {errors.algo && <p className="mt-2 text-xs text-red-600">{errors.algo}</p>}
                </div>

                {/* Link */}
                <div className="md:col-span-2 relative">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">Problem Link</label>
                  <input
                    type="text"
                    value={link}
                    ref={linkRef}
                    onChange={(e) => {
                      dispatchProblem({ type: "ADD_LINK", payload: e.target.value })
                      if (errors.link) setErrors((x) => ({ ...x, link: "" }));
                    }}
                    placeholder="Add problem link"
                    className="mt-1 block w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                  {errors.link && <p className="mt-2 text-xs text-red-600">{errors.link}</p>}
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 flex items-center justify-center pt-6">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all"
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

          {useAiMode && (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-10 duration-500">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Assistant</h1>
                <p className="text-gray-600">Paste your code and link, let AI handle the rest</p>
              </div>

              <div className="bg-white shadow-xl rounded-2xl p-8 border border-purple-100 flex flex-col relative overflow-hidden">

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

                {/* AI Input Forms */}
                <div className="space-y-6 z-10">

                  {/* AI Link Input */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-purple-900 mb-2">
                      <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs">1</span>
                      Problem Link
                    </label>
                    <input
                      type="text"
                      placeholder="Paste LeetCode/GeeksForGeeks link here..."
                      value={aiInputData.link}
                      onChange={(e) => setAiInputData({ ...aiInputData, link: e.target.value })}
                      className="w-full rounded-xl border-2 border-purple-100 px-4 py-3 text-sm focus:border-purple-400 focus:ring-4 focus:ring-purple-50 outline-none transition-all"
                    />
                  </div>

                  {/* AI Code Input */}
                  <div className="flex flex-col">
                    <label className="flex items-center gap-2 text-sm font-bold text-purple-900 mb-2">
                      <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs">2</span>
                      Your Raw Code
                    </label>
                    {/* Removed flex-1 here. Kept min-h to ensure it's usable. */}
                    <textarea
                      placeholder="Paste your raw solution code here..."
                      value={aiInputData.code}
                      onChange={(e) => setAiInputData({ ...aiInputData, code: e.target.value })}
                      className="w-full min-h-[300px] rounded-xl border-2 border-purple-100 px-4 py-3 text-sm font-mono focus:border-purple-400 focus:ring-4 focus:ring-purple-50 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                </div>

                {/* AI Action Button */}
                <div className="pt-6 z-10">
                  <button
                    onClick={handleAiGeneration}
                    disabled={aiLoading}
                    className={`relative w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center
                       gap-2 transition-all duration-300overflow-hidden
                       ${aiLoading ? "cursor-wait" : "hover:scale-[1.02] hover:shadow-xl"}`}>
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${aiLoading
                        ? "opacity-100 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-gradient-flow"
                        : "opacity-100 bg-gradient-to-r from-purple-600 to-pink-600"
                        }`}
                    />
                    <div className={`absolute inset-0 bg-white/0 transition-colors ${!aiLoading && "hover:bg-white/10"}`} />

                    {/* Content Layer: relative to sit on top of the background */}
                    <div className="relative flex items-center gap-2">
                      {aiLoading ? (
                        <>
                          {/* Gemini-style Sparkle Icon with Pulse */}
                          <svg
                            className="w-5 h-5 text-white animate-pulse"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2L14.3 9.4L22 12L14.3 14.6L12 22L9.7 14.6L2 12L9.7 9.4L12 2Z" />
                            <circle cx="12" cy="12" r="0.5" className="animate-ping" />
                          </svg>
                          <span className="animate-pulse tracking-wide">Analyzing...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                          Generate Solution
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}