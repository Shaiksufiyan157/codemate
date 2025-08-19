import React from "react"
export const Table=()=>{
    return(
            <>
              <div className="hidden md:block mt-4 overflow-x-auto border border-gray-200 rounded-lg bg-white">
                <table className="min-w-full text-left text-base border-separate" style={{ borderSpacing: 0 }}>
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-lg">Problem</th>
                      <th className="px-6 py-4 text-lg">Link</th>
                    </tr>
                  </thead>
                  <tbody>

                      <React.Fragment >
                        <tr className="">
                          <td className="align-top px-6 py-6 border-b border-gray-300">
                            <h1 className="text-base mb-3 text-black-600 font-medium">Problem name</h1>
                          </td>


                          <td className=" px-6 py-6 border-b border-gray-300">
                            <div className="flex flex-wrap items-center gap-3 items-center">
                              <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" />
                            </div>
                          </td>
                        </tr>
                      </React.Fragment>
                
                  </tbody>
                </table>
              </div>
        
              {/* Mobile/Card view */}
              <div className="md:hidden mt-4 space-y-4 ">

        
                  <div  className={`rounded-lg border border-gray-200 p-4 shadow-md bg-[#a2d2ff]`}>
                    {/* <h1 className="text-base mb-3 text-black-600 font-medium">Problem</h1> */}
                    <div className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      word ladder I
                    </div>
        
                    <div className="mt-3 text-gray-700 font-medium">Link</div>
                    <div className="mt-1 flex flex-wrap gap-2 cursor-pointer">
                     <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" />
                              
                    </div>
                  </div>
                    
                    
                    
                    
                     <div  className={`rounded-lg border border-gray-200 p-4 shadow-md bg-[#bde0fe]`}>
                    {/* <h1 className="text-base mb-3 text-black-600 font-medium">Problem</h1> */}
                    <div className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      word ladder II
                    </div>
        
                    <div className="mt-3 text-gray-700 font-medium">Link</div>
                    <div className="mt-1 flex flex-wrap gap-2 cursor-pointer">
                     <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" />
                              
                    </div>
                  </div>
                
              </div>
            </>
    )
}