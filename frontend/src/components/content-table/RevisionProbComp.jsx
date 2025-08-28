import { FaLightbulb } from "react-icons/fa"

export const RevisionProblemCard=({problem})=>{
    console.log(problem)
    // "bg-[#bde0fe]"
    return(
                   <>
                        <tr className={ "bg-[#a2d2ff]"}>
                          <td className="align-top px-6 py-6 border-b border-gray-300">
                            <h1 className="text-base mb-3 text-black-600 font-medium">{problem.ProblemStatement}</h1>
                            <ul className="list-none pl-0 space-y-3">
                            
                                <li className="flex items-start gap-3">
                                  <FaLightbulb className="text-yellow-500 mt-1 text-lg" />
                                  <span className="leading-relaxed text-base">{problem.approach_1}</span>
                                </li>
                         <li className="flex items-start gap-3">
                                  <FaLightbulb className="text-yellow-500 mt-1 text-lg" />
                                  <span className="leading-relaxed text-base">{problem.approach_2}</span>
                                </li>
                            </ul>
                          </td>
                          <td className="align-top px-6 py-6 border-b border-gray-300">
                            <div className="flex flex-wrap gap-3">
                              {/* {problem.DataStructure.map((ds, i) => ( */}
                                <span className="inline-block rounded border border-gray-300 px-3 py-1 text-sm bg-gray-100">{problem.ds}</span>
                              {/* ))} */}
                            </div>
                          </td>
                          <td className="align-top px-6 py-6 border-b border-gray-300">
                            <div className="flex flex-wrap gap-3">
                              {/* {problem.Algo.map((algo, i) => ( */}
                                <span className="inline-block rounded border border-gray-300 px-3 py-1 text-sm bg-gray-100">{problem.algo}</span>
                              {/* ))} */}
                            </div>
                          </td>
                          <td className=" px-6 py-6 border-b border-gray-300">
                            <div className="flex flex-wrap items-center gap-3 items-center">
                                <a href="https://www.leetcode.com">
                              <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </>
    )
}