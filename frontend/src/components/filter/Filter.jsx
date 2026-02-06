import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDSValue, setAlgoValue } from "../../slices/problemSlice";
import { useState } from "react";
import { PublishProblems } from "../MyProblems/PublishMyProblems";
export const Filter = () => {
  const navigate = useNavigate()
  const OnAddProblemClick = () => {
    navigate('/addproblem')
  }

  const dispatch = useDispatch();
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const OnDSChange = (e) => {
    dispatch(setDSValue(e.target.value));
  }

  const OnAlgoChange = (e) => {
    dispatch(setAlgoValue(e.target.value))
  }

  return (
<>
      {/* --- MAIN HEADER COMPONENT --- */}
      <div className="bg-indigo-900 rounded-t-xl p-6 shadow-xl relative overflow-hidden">
        {/* Decorative background glow for that "AI" feel */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between relative z-10">

          {/* Title & Action */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  Problem Solver
                </h1>
                {/* AI Badge next to title */}
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-800/80 border border-indigo-600 px-2 py-0.5 text-xs font-medium text-indigo-300">
                  <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                  AI Enabled
                </span>
              </div>
              <p className="text-indigo-300 text-xs mt-1">Manage, filter, and master your DSA list.</p>
            </div>

            <div className="flex items-center gap-3 mt-2 md:mt-0">
               {/* PUBLISH BUTTON - Triggers Modal */}
              <button
                onClick={() => setIsPublishModalOpen(true)}
                className="px-4 py-2.5 bg-indigo-800/50 text-indigo-200 border border-indigo-700/50 text-sm font-semibold rounded-lg hover:bg-indigo-800 hover:text-white transition-all shadow-sm whitespace-nowrap"
              >
                Publish List
              </button>

              {/* ENHANCED ADD PROBLEM BUTTON (AI HIGHLIGHT) */}
              <button
                onClick={OnAddProblemClick}
                className="group relative px-5 py-2.5 bg-white text-indigo-950 text-sm font-bold rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden border border-white/20"
              >
                {/* Gradient Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
                
                <div className="relative flex items-center gap-2">
                  <span className="text-purple-600">✨</span>
                  <span>Add Problem</span>
                  {/* "AI" Pill inside button */}
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[10px] font-extrabold tracking-wider shadow-sm">
                    AI
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            {/* Data Structure Select */}
            <div className="w-full sm:w-48">
              <label className="block text-xs font-medium text-indigo-300 mb-1 uppercase tracking-wider">
                Data Structure
              </label>
              <div className="relative group">
                <select
                  className="block w-full appearance-none rounded-lg border border-indigo-700 bg-indigo-800/40 px-4 py-2.5 text-sm text-white transition-colors focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 cursor-pointer hover:bg-indigo-800/60"
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
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-400 group-hover:text-white transition-colors">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </div>
              </div>
            </div>

            {/* Algorithm Select */}
            <div className="w-full sm:w-48">
              <label className="block text-xs font-medium text-indigo-300 mb-1 uppercase tracking-wider">
                Algorithm
              </label>
              <div className="relative group">
                <select
                  className="block w-full appearance-none rounded-lg border border-indigo-700 bg-indigo-800/40 px-4 py-2.5 text-sm text-white transition-colors focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 cursor-pointer hover:bg-indigo-800/60"
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
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-400 group-hover:text-white transition-colors">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {isPublishModalOpen && (
        <PublishProblems setIsPublishModalOpen={setIsPublishModalOpen} />
      )}
    </>
  );
}