import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaBolt } from 'react-icons/fa';
export const RapidProblemCard = ({ problem_statement, onNextClick, onBackClick, link }) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token])
    return (
        <div className="w-full max-w-2xl mx-auto px-4">

            {/* Main Flashcard Container */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden relative min-h-[300px] flex flex-col justify-between">

                {/* Decorative Top Gradient */}
                <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                {/* Card Content (Problem Statement) */}
                <div className="flex-grow flex flex-col items-center justify-center p-8 md:p-12 text-center">

                    {/* Icon Badge */}
                    <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 mb-6 shadow-sm">
                        <FaBolt size={20} />
                    </div>

                    {/* Text */}
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
                        {problem_statement || "Press Next to start!"}
                    </h2>

                    <p className="mt-4 text-slate-400 text-sm uppercase tracking-widest font-semibold">
                        Rapid Fire Mode
                    </p>
                </div>

                {/* Control Footer */}
                <div className="bg-slate-50 border-t border-slate-100 p-6">
                    <div className="flex items-center justify-between gap-4">

                        {/* Back Button */}
                        <button
                            onClick={onBackClick}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg text-slate-600 font-medium hover:bg-slate-200 transition-colors"
                        >
                            <FaArrowLeft size={14} />
                            <span>Prev</span>
                        </button>

                        {/* NEW: Link Button (Centered) */}
                        <a
                            href={link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 text-indigo-600 shadow-sm hover:shadow-md hover:border-indigo-400 hover:text-indigo-700 transition-all"
                            title="Open Problem Link"
                        >
                            <FaExternalLinkAlt size={16} />
                        </a>

                        {/* Next Button */}
                        <button
                            onClick={onNextClick}
                            className="flex items-center gap-2 px-8 py-3 rounded-lg bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        >
                            <span>Next</span>
                            <FaArrowRight size={14} />
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}