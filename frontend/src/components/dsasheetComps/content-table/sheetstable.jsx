import { useNavigate } from "react-router-dom"
export const SheetCard= ({ sheet,id }) => {
    const navigate = useNavigate()

    const OnSheetClick = () => {
        navigate(`${id}`)
    }

    return (
        <>
            <div key={id} className="mt-4 border border-gray-200 rounded-lg bg-slate-50 cursor-pointer" onClick={OnSheetClick}>
                <div className="px-6 py-4 text-lg">
                    <span>{sheet.name}</span>
                </div>
            </div>

        </>
    )
}







