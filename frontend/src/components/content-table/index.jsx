import { Filter } from "../filter/Filter"
import { Table } from "./table";
export const Problems = () => {
    
    return (
        <>
            <main className="w-full max-w-[90%] mx-auto p-6 bg-[#3A0CA3] rounded-lg shadow-lg mt-3">
                <Filter className="w-full sm:w-auto" />
                <Table />
            </main>
        </>
    )
}