import { useDispatch, useSelector } from "react-redux"
import { useEffect ,memo} from "react";
import { getsheets } from "../../api/sheets";
import { SheetCard } from "../../components/dsasheetComps/content-table/sheetstable"
import { SheetHead } from "../../components/dsasheetComps/head/dsasheethead";
import { useState } from "react";
import { HOCSheets } from "./hoc";

const DsaSheetsPage = ({sheets}) => {


//     useEffect(() => {
//         const loadSheets = async () => {
//             await dispatch(getsheets());
//             setLoading(false);
//         };
//         loadSheets();

//     }, [dispatch]);


//    if (loading) {
//     console.log("loading...")
//   }
//   const sheets=useSelector(state=>state.dsasheet.sheets)
   console.log("re rendered")
    return (
      <main className="w-full max-w-[90%] mx-auto p-6 bg-[#3A0CA3] rounded-lg shadow-lg mt-3"  >
            <SheetHead className="w-full sm:w-auto" />
            {
                sheets.map((sheet,idx) => {
                    return <SheetCard key={sheet.id} idx={idx} sheet={sheet} id={sheet.id} />;

                })
            }

        </main>
    )
}

export default memo(HOCSheets(DsaSheetsPage));