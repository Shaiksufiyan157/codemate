import React from "react"
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useParams } from "react-router-dom"
import { dsasheetdata } from "../../../db";
export const ProblemsTable = () => {
  const params = useParams();
  console.log(params.id)

  const { problems } = dsasheetdata.find(({ _id }) => _id === params.id)
  console.log(problems)
  return (
    <>
      <div className=" mt-4 mx-5 overflow-x-auto border border-gray-200 rounded-lg bg-white">
        <table className="min-w-full text-left text-base border-separate " style={{ borderSpacing: 0 }}>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-lg">Problem</th>
              <th className="px-6 py-4 text-lg">Link</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <>    <React.Fragment >
                <tr className="">
                  <td className="align-top px-6 py-6 border- border-gray-300">
                    <h1 className="text-base mb-3 text-black-600 font-medium">{problem.probname}</h1>
                  </td>
                  <td className=" px-6 py-6 border- border-gray-300">
                    <div className="flex flex-wrap gap-3 items-center">
                      <a href="https://www.leetcode.com"> <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo" /></a>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
              </>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}