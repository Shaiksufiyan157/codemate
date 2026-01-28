import { FaExternalLinkAlt } from 'react-icons/fa';

const SheetProblemMobile = ({ idx, problem }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-center justify-between gap-4">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 mt-0.5 text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded">
          #{idx + 1}
        </span>
        <h3 className="text-sm font-semibold text-gray-800 leading-snug">
          {problem.problem_statement}
        </h3>
      </div>
      
      <a 
        href={problem.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-indigo-600 border border-slate-200 active:bg-indigo-100"
      >
        <FaExternalLinkAlt size={14} />
      </a>
    </div>
  );
};

export default SheetProblemMobile;