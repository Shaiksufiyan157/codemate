import React from "react"
export const SheetProblemCard = ({ problem,_id }) => {
    console.log(problem)
    console.log(_id)
    return (
        <React.Fragment >
            <tr className="">
                <td className="align-top px-6 py-6 border- border-gray-300">
                    <h1 className="text-base mb-3 text-black-600 font-medium">{problem.probname} </h1>
                </td>
                <td className=" px-6 py-6 border- border-gray-300">
                    <div className="flex flex-wrap gap-3 items-center">
                        <a href={problem.link} target="_blank"> <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" /></a>
                    </div>
                </td>
            </tr>
        </React.Fragment>
    )
}