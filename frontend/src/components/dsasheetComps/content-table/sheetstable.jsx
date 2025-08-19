import React from "react"
export const SheetTable = () => {
    return (
        <>
            <div className="hidden md:block mt-4 border border-gray-200 rounded-lg bg-white cursor-pointer">
                <div className="px-6 py-4 text-lg">
                    <span>Shaiks dsa sheet</span>
                </div>
            </div>

            <div className="hidden md:block mt-4 border border-gray-200 rounded-lg bg-white cursor-pointer">
                <div className="px-6 py-4 text-lg">
                    <span>Shaiks dsa sheet</span>
                </div>
            </div>
            {/* Mobile/Card view */}
            <div className="md:hidden mt-4 space-y-4">
                <div className="rounded-lg border border-gray-200 p-4 shadow-md bg-[#a2d2ff]">
                    <div className="text-gray-700 font-medium mb-2">
                        Shaiks dsa sheet
                    </div>
                </div>
            </div>
            
            <div className="md:hidden mt-4 space-y-4">
                <div className="rounded-lg border border-gray-200 p-4 shadow-md bg-[#a2d2ff]">
                    <div className="text-gray-700 font-medium mb-2">
                        Shaiks dsa sheet
                    </div>
                </div>
            </div>

        </>
    )
}