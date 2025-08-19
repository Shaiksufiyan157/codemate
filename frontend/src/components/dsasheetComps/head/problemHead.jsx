import Button from "@mui/material/Button";
export const ProblemsHead = () => {
    return (
        <>
                   <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-xl font-semibold text-white">Shaik's Sheet</h1>
                <Button 

                 sx={{ color: "black", backgroundColor: "white" }}>
                    add problem
                </Button>

                <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                    <label className="w-full sm:w-60">
                        <span className="block text-sm text-white mb-1">Data Structure</span>
                        <select
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"

                        >
                            <option selected>
                                All
                            </option>
                            <option>Array</option>
                            <option>Heap</option>
                            <option>Linked List</option>
                            <option>Graph (Adjacency List)</option>
                            <option>Stack</option>
                        </select>
                    </label>

                    <label className="w-full sm:w-60">
                        <span className="block text-sm text-white mb-1">Algorithm</span>
                        <select
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
        
                        >
                            <option selected>
                                All
                            </option>
                            <option>Merge Sort</option>
                            <option>Insertion Sort</option>
                            <option>Depth First Search</option>
                            <option>Cycle Detection</option>
                            <option>Bs</option>
                        </select>
                    </label>
                </div>
            </div>
        </>
    )
}