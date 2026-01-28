import { FaLightbulb, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from "react";
import CodeViewer from "./CodeViewer";
export const RevisionProblemCard = ({ problem, idx }) => {
  const dataStructures = problem.ds.split(",").map(item => item.trim());
  const algos = problem.algo.split(",").map(item => item.trim());
  const [viewCode, setViewCode] = useState(false)
  // const OnviewCodeClick = () => {
  //   setViewCode(!viewCode)
  // }
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

        {/* Link */}
        <td className="align-top px-6 py-6 w-1/12">
          <a 
            href={problem.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-indigo-100 text-gray-400 hover:text-indigo-600 transition-all border border-gray-200"
          >
            <FaExternalLinkAlt size={14} />
          </a>
        </td>
      </tr>

      {/* Expanded Code View */}
      {viewCode && (
        <tr>
          <td colSpan="4" className="px-0 py-0 bg-slate-50 border-b border-gray-200 shadow-inner">
            <div className="p-6 max-w-5xl mx-auto">
              <CodeViewer codeString={problem.code}  />
            </div>
          </td>
        </tr>
      )}
    </>
  )
}