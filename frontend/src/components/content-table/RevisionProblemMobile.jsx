import { FaLightbulb, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaTrash, FaEllipsisV } from 'react-icons/fa';
import { useState } from "react";
import CodeViewer from "./CodeViewer";
import { removeProblemFromList } from '../../slices/problemSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios'; // Ensure axios is imported

export const RevisionProblemMobile = ({ problem, idx }) => {
  const [viewcode, setViewcode] = useState(false);
  
  // 1. New State for the mobile dropdown menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dataStructures = problem.ds.split(",").map(item => item.trim());
  const algos = problem.algo.split(",").map(item => item.trim());
  const dispatch = useDispatch();

  const deleteProblem = async (id) => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/deleteproblem`;
    const data = { id: id };
    try {
      await axios.put(url, data, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const HandleDeleteClick = () => {
    deleteProblem(problem.id);
    toast.success("Problem deleted Successfully");
    dispatch(removeProblemFromList(problem.id));
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden relative">

      {/* Header */}
      <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-start">
        <h3 className="text-base font-bold text-gray-900 leading-snug pr-2 flex-1">
          <span className="text-indigo-600 mr-2">#{idx + 1}.</span>
          {problem.problem_statement}
        </h3>

        {/* Right Actions Container: Link + Menu */}
        <div className="flex items-center gap-3 shrink-0 pt-1">
          <a
            href={problem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-600"
          >
            <FaExternalLinkAlt size={16} />
          </a>

          {/* Mobile Menu Container */}
          <div className="relative">
            
            {/* 2. Toggle Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-indigo-600 transition-colors p-1"
            >
              <FaEllipsisV size={16} />
            </button>

            {/* 3. Dropdown Logic */}
            {isMenuOpen && (
              <>
                {/* Fixed Backdrop: Tapping anywhere else closes the menu */}
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Dropdown Menu */}
                <div className="absolute right-0 top-8 z-40 w-32 bg-white rounded-md shadow-xl border border-gray-100 py-1">
                  <button
                    onClick={HandleDeleteClick}
                    className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <FaTrash size={12} />
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Approach */}
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Approach</h4>
          <ul className="space-y-2">
            <li className="flex gap-2 text-sm text-gray-700">
              <FaLightbulb className="text-amber-500 mt-0.5 shrink-0" />
              {problem.approach_1}
            </li>
            {problem.approach_2 && (
              <li className="flex gap-2 text-sm text-gray-700">
                <FaLightbulb className="text-amber-500 mt-0.5 shrink-0" />
                {problem.approach_2}
              </li>
            )}
          </ul>
        </div>

        {/* Tags Row */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Structure</h4>
            <div className="flex flex-wrap gap-1.5">
              {dataStructures.map((ds, i) => (
                ds && <span key={i} className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">{ds}</span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Algorithm</h4>
            <div className="flex flex-wrap gap-1.5">
              {algos.map((algo, i) => (
                algo && <span key={i} className="px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">{algo}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Code Toggle Button */}
      <div
        onClick={() => setViewcode(!viewcode)}
        className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <span className="text-sm font-semibold text-gray-600">
          {viewcode ? 'Hide Solution' : 'View Solution Code'}
        </span>
        {viewcode ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
      </div>

      {/* Code Block */}
      {viewcode && (
        <CodeViewer codeString={problem.code} />
      )}
    </div>
  )
}