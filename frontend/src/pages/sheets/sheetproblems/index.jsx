import { useParams } from "react-router-dom"
import { SheetProblemCard } from "../../../components/dsasheetComps/content-table/problemcard";
import {SheetProblemMobile} from "../../../components/dsasheetComps/content-table/SheetProblemMobile ";
import { HOCSheets } from "../sheetlist/hoc";
import { HOCSheetsProblems } from "./hoc";
const SheetProblemsPage = ({ sheets }) => {

    const params = useParams();
    const dsasheet = sheets.find(({ id }) => id === params.sid)
    const problems = dsasheet?.problems || [];
    
    return (
        <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">

                {/* Optional Header - Good for UX */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Practice Sheet</h2>
                    <p className="text-slate-500 text-sm mt-1">
                        {problems?.length || 0} problems curated for you.
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

                    {/* Desktop View (Table) */}
                    <div className="hidden sm:block overflow-x-auto">
                        <table className="min-w-full text-left border-collapse">
                            <thead className="bg-slate-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Problem Statement
                                    </th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center w-32">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {problems && problems.length > 0 ? (
                                    problems.map((problem, idx) => (
                                        <SheetProblemCard
                                            key={problem.id || idx}
                                            idx={idx}
                                            problem={problem}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" className="px-6 py-10 text-center text-gray-400 italic">
                                            No problems found in this sheet.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile View (Stack of Cards) */}
                    <div className="sm:hidden p-4 bg-slate-50 space-y-3">
                        {problems && problems.length > 0 ? (
                            problems.map((problem, idx) => (
                                <SheetProblemMobile
                                    key={problem.id || idx}
                                    idx={idx}
                                    problem={problem}
                                />
                            ))
                        ) : (
                            <div className="text-center text-gray-400 py-8">No problems found.</div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HOCSheetsProblems(HOCSheets(SheetProblemsPage))