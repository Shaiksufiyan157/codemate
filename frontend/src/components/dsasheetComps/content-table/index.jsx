import { ProblemsHead } from "../head/problemHead"
import { SheetHead } from "../head/dsasheethead"
import {Table}from "./problemstable"
import { SheetTable } from "./sheetstable"
export const Dsasheets = () => {
    return (
        <main className="w-full max-w-[90%] mx-auto p-6 bg-[#3A0CA3] rounded-lg shadow-lg mt-3">
            <SheetHead className="w-full sm:w-auto" />
            <SheetTable/>
        </main>
    )
}