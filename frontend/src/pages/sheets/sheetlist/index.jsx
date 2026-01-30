import { memo} from "react";
import { SheetCard } from "../../../components/dsasheetComps/content-table/sheetstable"
import { HOCSheets } from "./hoc";
import { FaThLarge } from 'react-icons/fa';

const DsaSheetsPage = ({sheets}) => {
  return (
        <main className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                            <FaThLarge className="text-indigo-600" />
                            DSA Sheets
                        </h1>
                        <p className="text-slate-500 mt-2 text-lg">
                            Select a topic to start practicing.
                        </p>
                    </div>
                    
                    {/* Optional: You could add a progress summary here later */}
                    <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-sm text-slate-600">
                        Total Sheets: <span className="font-bold text-indigo-600">{sheets?.length || 0}</span>
                    </div>
                </div>

                {/* Grid Layout for Cards */}
                {sheets && sheets.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sheets.map((sheet, idx) => (
                            <SheetCard 
                                key={sheet.id || idx} 
                                idx={idx} 
                                sheet={sheet} 
                                id={sheet.id} 
                            />
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-400 text-lg">No sheets available at the moment.</p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default memo(HOCSheets(DsaSheetsPage));

