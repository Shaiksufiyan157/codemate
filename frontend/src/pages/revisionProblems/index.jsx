import { RevisionProblemCard } from "../../components/MyProblems/RevisionProbComp"
import { RevisionProblemMobile } from "../../components/MyProblems/RevisionProblemMobile"
import { getFilterByAlgo, getFilterByDs } from "../../utils/problemfilter"
import { useSelector, useDispatch } from "react-redux"
import { Filter } from "../../components/filter/Filter"
import { useEffect, useState } from "react"
import { getProblems } from "../../api/revproblems"
import Loading from "../../components/utils/Loading"
import { useNavigate } from "react-router-dom"

export const RevisionProblemPage = () => {

  const dispatch = useDispatch();
  const { problems, datastructure, algo } = useSelector(state => state.problem)
  const token = localStorage.getItem("token")
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
    else {
      const loadproblems = () => {
        if (!problems || problems.length === 0) {
          dispatch(getProblems())
        }
        setLoading(false)
      }
      loadproblems()
    }

  }, [])


  const FilterByDs = getFilterByDs(problems, datastructure)
  const FilterByAlgo = getFilterByAlgo(FilterByDs, algo)
  if (loading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Filter Header */}
        <div className="mb-6 shadow-lg rounded-xl overflow-hidden">
          <Filter

          />
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

          {/* Desktop View Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Problem & Approach </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Data Structure</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Algorithm</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {FilterByAlgo?.map((problem, idx) => (
                  <RevisionProblemCard
                    key={problem.id || idx}
                    idx={idx}
                    problem={problem}
                  />
                ))}
              </tbody>
            </table>

            {(!FilterByAlgo || FilterByAlgo.length === 0) && (
              <div className="p-12 text-center text-gray-400">
                No problems found matching your filters.
              </div>
            )}
          </div>

          {/* Mobile View Stack */}
          <div className="md:hidden p-4 bg-slate-50 space-y-4">
            {FilterByAlgo?.map((problem, idx) => (
              <RevisionProblemMobile
                key={problem.id || idx}
                idx={idx}
                problem={problem}
              />
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}