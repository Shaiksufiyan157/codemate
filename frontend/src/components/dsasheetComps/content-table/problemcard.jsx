import { FaExternalLinkAlt } from 'react-icons/fa';
export const SheetProblemCard = ({ problem,idx}) => {
return (
    <tr className="group transition-colors hover:bg-slate-50 border-b border-gray-100 last:border-0">
      
      {/* Problem Statement Column */}
      <td className="px-6 py-5 align-middle">
        <div className="flex items-center gap-4">
          
          {/* Index Badge */}
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 font-bold text-sm">
            {idx + 1}
          </div>
          
          {/* Problem Title */}
          <h3 className="text-gray-700 font-medium text-base group-hover:text-indigo-900 transition-colors">
            {problem.problem_statement}
          </h3>
        </div>
      </td>

      {/* Link Column */}
      <td className="px-6 py-5 align-middle w-32">
        <a 
          href={problem.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-500 text-sm font-medium shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md transition-all group-hover:translate-x-1"
        >
          <span>Solve</span>
          <FaExternalLinkAlt className="text-xs" />
        </a>
      </td>

    </tr>
  )
}