import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getsheets } from "../../api/sheets";
import { SheetCard } from "../../components/dsasheetComps/content-table/sheetstable"
import { SheetHead } from "../../components/dsasheetComps/head/dsasheethead";
import { v4 as uuid } from "uuid"
export const DsaSheetsPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getsheets())
        console.log("called")
    }, [])
    const { sheets } = useSelector(state => state.dsasheet)
    console.log(sheets)
    return (
        <main className="w-full max-w-[90%] mx-auto p-6 bg-[#3A0CA3] rounded-lg shadow-lg mt-3"  >
            <SheetHead className="w-full sm:w-auto" />
            {
                sheets.map((sheet) => {
                    const id = uuid();
                    return <SheetCard key={id} sheet={sheet} id={id} />;

                })
            }

        </main>
    )
}