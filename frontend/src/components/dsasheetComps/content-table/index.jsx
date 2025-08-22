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
    // const handleClick=()=>{
    //     dispatch(addsheet(dsasheetdata))
    // }
    return (
        <main className="w-full max-w-[90%] mx-auto p-6 bg-[#3A0CA3] rounded-lg shadow-lg mt-3"  >
            <SheetHead className="w-full sm:w-auto" />
            {
                sheets.map((sheet)=>(
                    <SheetCard  key={sheet._id} sheet={sheet}/>
                ))
            }

        </main>
    )
}

// onClick={handleClick}