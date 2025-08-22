import { SheetHead } from "../head/dsasheethead"

import { SheetCard } from "./sheetstable"
import { addsheet } from "../../../slices/dsaSheetsSlice"
import { useDispatch,useSelector } from "react-redux"
import { dsasheetdata } from "../../../db"




export const Dsasheets = () => {

    const dispatch=useDispatch();
    console.log(dsasheetdata)
    const {sheets}=useSelector(state=>state.dsasheet)
    console.log(sheets)
    const handleClick=()=>{
        dispatch(addsheet(dsasheetdata))
    }
    return (
        <main className="w-full max-w-[90%] mx-auto p-6 bg-[#3A0CA3] rounded-lg shadow-lg mt-3" onClick={handleClick}>
            <SheetHead className="w-full sm:w-auto" />
            {
                dsasheetdata.map((sheet)=>(
                    <SheetCard sheet={sheet}/>
                ))
            }
            <div  className="hidden md:block mt-4 border border-gray-200 rounded-lg bg-slate-50 cursor-pointer" >
                <div className="px-6 py-4 text-lg">
                    <span>sheet name</span>
                </div>
            </div>
                        <div  className="hidden md:block mt-4 border border-gray-200 rounded-lg bg-slate-50 cursor-pointer" >
                <div className="px-6 py-4 text-lg">
                    <span>sheet name</span>
                </div>
            </div>
        </main>
    )
}