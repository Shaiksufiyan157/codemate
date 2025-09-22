import { FaLightbulb } from "react-icons/fa"

export const RevisionProblemCard=({problem,idx})=>{
     const dataStructures = problem.ds.split(",").map(item => item.trim());
     const algos=problem.algo.split(",").map(item=>item.trim());
    return(
                   <>
                        <tr className={ "bg-[#a2d2ff]"}>
                          <td className="align-top px-6 py-6 border-b border-gray-300">
                            <h1 className="text-base mb-3 text-black-600 font-medium">{idx+1}. {problem.problem_statement}</h1>
                            <ul className="list-none pl-0 space-y-3">
                            
                                <li className="flex items-start gap-3">
                                  <FaLightbulb className="text-yellow-500 mt-1 text-lg" />
                                  <span className="leading-relaxed text-base">{problem.approach_1}</span>
                                </li>
                         {problem.approach_2 && <li className="flex items-start gap-3">
                                  <FaLightbulb className="text-yellow-500 mt-1 text-lg" />
                                  <span className="leading-relaxed text-base">{problem.approach_2}</span>
                                </li>}
                            </ul>
                          </td>
                          <td className="align-top px-6 py-6 border-b border-gray-300">
                            <div className="flex flex-wrap gap-3">
                              {dataStructures.map((ds, i) => (
                                <span key={i}className="inline-block rounded border border-gray-300 px-3 py-1 text-sm bg-gray-100">{ds}</span>
                              ))}
                            </div>
                          </td>
                          <td className="align-top px-6 py-6 border-b border-gray-300">
                            <div className="flex flex-wrap gap-3">
                              {algos.map((algo, i) => (
                                <span className="inline-block rounded border border-gray-300 px-3 py-1 text-sm bg-gray-100">{algo}</span>
                               ))} 
                            </div>
                          </td>
                          <td className=" px-6 py-6 border-b border-gray-300">
                            <div className="flex flex-wrap items-center gap-3 items-center">
                                <a href={problem.link} target="_blank">
                              <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </>
    )
}