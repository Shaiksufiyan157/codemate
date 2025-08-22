import React, { use } from "react";
import { FaLightbulb } from "react-icons/fa";
import { getFilterByDs, getFilterByAlgo } from "../../utils/problemfilter";
import { useSelector } from "react-redux";
export const Table = () => {

  const { problems, datastructure, algo } = useSelector(state => state.problem)

  const FilterByDs = getFilterByDs(problems, datastructure)
  const FilterByAlgo = getFilterByAlgo(FilterByDs, algo)
  console.log(FilterByAlgo)
  return (
    <>
      <div className="hidden md:block mt-4 overflow-x-auto border border-gray-200 rounded-lg bg-white">
        <table className="min-w-full text-left text-base border-separate" style={{ borderSpacing: 0 }}>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-lg">Approach</th>
              <th className="px-6 py-4 text-lg">Data Structures</th>
              <th className="px-6 py-4 text-lg">Algorithms</th>
              <th className="px-6 py-4 text-lg">Link</th>
            </tr>
          </thead>
          <tbody>
            {FilterByAlgo.map((row, idx) => (
              <React.Fragment key={idx}>
                <tr className={idx % 2 ? "bg-[#a2d2ff]" : "bg-[#bde0fe]"}>
                  <td className="align-top px-6 py-6 border-b border-gray-300">
                    <h1 className="text-base mb-3 text-black-600 font-medium">{idx + 1}. {row.problem.ProblemStatement}</h1>
                    <ul className="list-none pl-0 space-y-3">
                      {row.problem.Approach.map((para, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {para.lenght > 0}
                          <FaLightbulb className="text-yellow-500 mt-1 text-lg" />
                          <span className="leading-relaxed text-base">{para}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="align-top px-6 py-6 border-b border-gray-300">
                    <div className="flex flex-wrap gap-3">
                      {row.problem.DataStructure.map((ds, i) => (
                        <span key={i} className="inline-block rounded border border-gray-300 px-3 py-1 text-sm bg-gray-100">{ds}</span>
                      ))}
                    </div>
                  </td>
                  <td className="align-top px-6 py-6 border-b border-gray-300">
                    <div className="flex flex-wrap gap-3">
                      {row.problem.Algo.map((algo, i) => (
                        <span key={i} className="inline-block rounded border border-gray-300 px-3 py-1 text-sm bg-gray-100">{algo}</span>
                      ))}
                    </div>
                  </td>
                  <td className=" px-6 py-6 border-b border-gray-300">
                    <div className="flex flex-wrap items-center gap-3 items-center">
                      <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" />
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile/Card view */}
      <div className="md:hidden mt-4 space-y-4 ">
        {FilterByAlgo.map((row, idx) => (

          <div key={idx} className={`rounded-lg border border-gray-200 p-4 shadow-md ${idx % 2 ? "bg-[#a2d2ff]" : "bg-[#bde0fe]"}`}>
            <h1 className="text-base mb-3 text-black-600 font-medium">{idx + 1}. {row.problem.ProblemStatement}</h1>
            <div className="flex items-center gap-2 text-gray-700 font-medium mb-2">
              <FaLightbulb className="text-yellow-500" />
              Approach
            </div>

            <ul className="list-disc pl-5 space-y-2 text-sm">
              {row.problem.Approach.map((para, i) => (
                <li key={i}>{para}</li>
              ))}
            </ul>

            <div className="mt-3 text-gray-700 font-medium">Data Structures</div>
            <div className="mt-1 flex flex-wrap gap-2">
              {row.problem.DataStructure.map((ds, i) => (
                <span key={i} className="inline-block rounded border border-gray-300 px-2 py-1 text-xs bg-gray-100">{ds}</span>
              ))}
            </div>

            <div className="mt-3 text-gray-700 font-medium">Algorithms</div>
            <div className="mt-1 flex flex-wrap gap-2">
              {row.problem.Algo.map((algo, i) => (
                <span key={i} className="inline-block rounded border border-gray-300 px-2 py-1 text-xs bg-gray-100">{algo}</span>
              ))}
            </div>
            <div className="mt-3 text-gray-700 font-medium">Link</div>
            <div className="mt-1 flex flex-wrap gap-2 cursor-pointer">
             <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" />
                      
            </div>
          </div>
        ))}
      </div>
    </>

  );
};
