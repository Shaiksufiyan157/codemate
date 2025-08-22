import React from "react"
import { useSelector } from "react-redux"
import { Fragment } from "react"
import { dsasheetdata } from "../../../db"
import { useNavigate } from "react-router-dom"
export const SheetCard= ({ sheet }) => {
    const navigate = useNavigate()

    const OnSheetClick = () => {
        navigate(`${sheet._id}`)
    }

    return (
        <>
            <div key={sheet._id} className="mt-4 border border-gray-200 rounded-lg bg-slate-50 cursor-pointer" onClick={OnSheetClick}>
                <div className="px-6 py-4 text-lg">
                    <span>{sheet.name}</span>
                </div>
            </div>

        </>
    )
}







