import { FaLightbulb } from "react-icons/fa"
export const RevisionProblemMobile=({problem,idx})=>{
    return (
        <>
        <div  className={`rounded-lg border border-gray-200 p-4 shadow-md ${ "bg-[#a2d2ff]" }`}>
                    <h1 className="text-base mb-3 text-black-600 font-medium">{idx+1}. {problem.problem_statement}</h1>
                    <div className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <FaLightbulb className="text-yellow-500" />
                      Approach
                    </div>
        
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li >{problem.approach_1}</li>
                        <li >{problem.approach_2}</li>
                    </ul>
        
                    <div className="mt-3 text-gray-700 font-medium">Data Structures</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {/* {row.problem.DataStructure.map((ds, i) => ( */}
                        <span className="inline-block rounded border border-gray-300 px-2 py-1 text-xs bg-gray-100">{problem.ds}</span>
                      {/* ))} */}
                    </div>
        
                    <div className="mt-3 text-gray-700 font-medium">Algorithms</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {/* {row.problem.Algo.map((algo, i) => ( */}
                        <span className="inline-block rounded border border-gray-300 px-2 py-1 text-xs bg-gray-100">{problem.algo}</span>
                      {/* ))} */}
                    </div>
                    <div className="mt-3 text-gray-700 font-medium">Link</div>
                    <div className="mt-1 flex flex-wrap gap-2 cursor-pointer">
                     <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" />
                              
                    </div>
                  </div>
        </>
    )
}