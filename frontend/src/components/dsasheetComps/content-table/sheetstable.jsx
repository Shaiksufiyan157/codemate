import { useNavigate } from "react-router-dom"
import { FaLayerGroup, FaArrowRight } from 'react-icons/fa';
export const SheetCard= ({ sheet,id,idx }) => {
    const navigate = useNavigate()

    const OnSheetClick = () => {
        navigate(`${id}`)
    }

  return (
        <div 
            onClick={OnSheetClick}
            className="group bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden"
        >
            {/* Decorative Top Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-start justify-between mb-4">
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <FaLayerGroup size={20} />
                </div>
                
                {/* Index Badge (Optional) */}
                <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                    #{idx + 1}
                </span>
            </div>

            <div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-700 transition-colors mb-2">
                    {sheet.name}
                </h3>
                <p className="text-sm text-gray-500">
                    Click to view problems in this sheet.
                </p>
            </div>

            {/* Bottom Action Area */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-medium text-indigo-600">
                <span>Open Sheet</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    );
}







