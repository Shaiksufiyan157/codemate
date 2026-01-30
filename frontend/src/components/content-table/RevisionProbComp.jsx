import { FaLightbulb, FaCode, FaExternalLinkAlt, FaTrash, FaEllipsisV } from 'react-icons/fa';
import { useState } from "react";
import CodeViewer from "./CodeViewer";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { removeProblemFromList } from '../../slices/problemSlice';
import toast from 'react-hot-toast';

export const RevisionProblemCard = ({ key, problem, idx }) => {
  const dataStructures = problem.ds.split(",").map(item => item.trim());
  const algos = problem.algo.split(",").map(item => item.trim());
  
  const [viewCode, setViewCode] = useState(false);
  // 1. New state for the dropdown menu
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const dispatch = useDispatch();

  const deleteProblem = async (id) => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/deleteproblem`
    const data = { id: id }
    try {
      await axios.put(url, data, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
    } catch (error) {
      toast.error("something went wrong")
    }
  }

  const HandleDeleteClick = () => {
    deleteProblem(problem.id);
    toast.success("Problem deleted Successfully");
    dispatch(removeProblemFromList(problem.id));
    setIsMenuOpen(false); // Close menu on action
  }

  return (
    <>
      <tr className="group hover:bg-slate-50 transition-colors border-b border-gray-100 last:border-0">

        {/* Approach Column */}
        <td className="align-top px-6 py-6 w-5/12">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
              #{idx + 1}
            </span>
            <h3 className="text-lg font-semibold text-gray-800 leading-tight">
              {problem.problem_statement}
            </h3>
          </div>

          <ul className="space-y-3 pl-1">
            <li className="flex gap-3 text-gray-600 text-sm leading-relaxed">
              <FaLightbulb className="text-amber-500 mt-1 flex-shrink-0" />
              <span>{problem.approach_1}</span>
            </li>
            {problem.approach_2 && (
              <li className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                <FaLightbulb className="text-amber-500 mt-1 flex-shrink-0" />
                <span>{problem.approach_2}</span>
              </li>
            )}
          </ul>

          <button
            onClick={() => setViewCode(!viewCode)}
            className="mt-4 flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 px-3 py-1.5 rounded-md transition-all w-fit"
          >
            <FaCode />
            {viewCode ? "Hide Solution" : "View Solution"}
          </button>
        </td>

        {/* Data Structures */}
        <td className="align-top px-6 py-6 w-2/12">
          <div className="flex flex-wrap gap-2">
            {dataStructures.map((ds, i) => (
              ds && <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                {ds}
              </span>
            ))}
          </div>
        </td>

        {/* Algorithms */}
        <td className="align-top px-6 py-6 w-2/12">
          <div className="flex flex-wrap gap-2">
            {algos.map((algo, i) => (
              algo && <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                {algo}
              </span>
            ))}
          </div>
        </td>

        {/* --- Right Most Column (Menu & Link) --- */}
        <td className="align-top px-2 py-4 w-1/12">
          <div className="flex flex-col gap-2">

            {/* 1. Top Item: Menu Container */}
            <div className="flex justify-end relative">
              <div className="relative inline-block text-left">
                
                {/* 2. Added onClick to toggle state */}
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-1.5 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  <FaEllipsisV size={14} />
                </button>

                {/* 3. Conditional Rendering based on state */}
                {isMenuOpen && (
                  <>
                    {/* 4. Invisible Backdrop to handle "Click Outside" */}
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsMenuOpen(false)}
                    ></div>

                    {/* Dropdown Menu */}
                    <div className="absolute right-6 top-0 w-auto whitespace-nowrap bg-white rounded-md shadow-lg border border-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <div className="py-0.5">
                        <button
                          onClick={HandleDeleteClick}
                          className="flex items-center gap-1 px-2 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
                        >
                          <FaTrash size={12} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 2. Bottom Item: Link Container */}
            <div className="flex justify-center mt-2">
              <a
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-indigo-100 text-gray-400 hover:text-indigo-600 transition-all border border-gray-200"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            </div>

          </div>
        </td>
      </tr>

      {/* Expanded Code View */}
      {viewCode && (
        <tr>
          <td colSpan="4" className="px-0 py-0 bg-slate-50 border-b border-gray-200 shadow-inner">
            <div className="p-6 max-w-5xl mx-auto">
              <CodeViewer codeString={problem.code} />
            </div>
          </td>
        </tr>
      )}
    </>
  )
}