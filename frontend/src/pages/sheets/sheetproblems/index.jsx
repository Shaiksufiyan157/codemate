import React from "react"
import { useParams } from "react-router-dom"
import {useSelector} from 'react-redux'
import { SheetProblemCard } from "../../../components/dsasheetComps/content-table/problemcard";
import { HOCSheets } from "../hoc";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast,{Toaster} from 'react-hot-toast'
import axios from "axios";
import { HOCSheetsProblems } from "./hoc";
const SheetProblemsPage = ({sheets}) => {

    const params = useParams();
    console.log(params.sid)
    // const {sheets}=useSelector(state=>state.dsasheet)
    // console.log(sheets)
    const  dsasheet = sheets.find(({ id }) => id === params.sid)
     console.log(dsasheet)
     const problems = dsasheet?.problems || [];
    //  console.log("re-render from problems")

    return (
        <>
        {/* <Toaster/> */}
            <div className="mt-4 mx-5 border border-gray-200 rounded-lg bg-white">
                <table className="min-w-full text-left text-base border-separate " style={{ borderSpacing: 0 }}>
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-lg">Problem</th>
                            <th className="px-6 py-4 text-lg">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {problems.map((problem,idx) => (
                             <SheetProblemCard idx={idx} key={problem.id} problem={problem}/>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HOCSheetsProblems(HOCSheets(SheetProblemsPage))