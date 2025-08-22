import React from "react"
import { useParams } from "react-router-dom"
import { dsasheetdata } from "../../../db";
import { SheetProblemCard } from "../../../components/dsasheetComps/content-table/problemcard";

export const SheetProblems = () => {
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
                            <>    <SheetProblemCard problem={problem}/>
                            </>

                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}