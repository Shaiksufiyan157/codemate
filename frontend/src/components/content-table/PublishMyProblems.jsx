import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuid } from "uuid";
export const PublishProblems = ({ setIsPublishModalOpen }) => {

    const { problems } = useSelector(state => state.problem)
    const { user } = useSelector((state) => state.user);
    const [sheetname, setSheetName] = useState("");
    const myproblems = [];
    for (const problem of problems) {
        const myproblem = {
            id: uuid(),
            problem_statement: problem.problem_statement,
            link: problem.link
        }
        myproblems.push(myproblem)
    }


    const token = localStorage.getItem('token')
    const PublishSheet = async () => {
        const data = {
            id: uuid(),
            sheetname: sheetname,
            author: user.username,
            myproblems: myproblems
        }
        const url = `${import.meta.env.VITE_BACKEND_URL}/publishsheet`;
        await axios.post(url, data, {
            headers: {
                Authorization: token
            }
        })

    }
    const handleConfirmPublish = () => {

        try {
            PublishSheet();
            toast.success("added successfully")
            setIsPublishModalOpen(false);
            setSheetName("");
        }
        catch {
            toast.error("somethng went wrong")
        }
    };
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">

                    {/* Modal Header */}
                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                        <h3 className="text-lg font-bold text-gray-800">Publish List</h3>
                        <button
                            onClick={() => setIsPublishModalOpen(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Give name to your DSA Sheet
                            </label>
                            <input
                                type="text"
                                value={sheetname}
                                onChange={(e) => setSheetName(e.target.value)}
                                placeholder="e.g. Blind 75 Essentials"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                autoFocus
                            />
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
                        <button
                            onClick={() => setIsPublishModalOpen(false)}
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleConfirmPublish}
                            disabled={!sheetname.trim()}
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Confirm Publish
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}