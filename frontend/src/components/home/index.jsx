import { useState ,useEffect, use} from "react"
import { Link } from "react-router-dom";
import Navbar from "../navbar/index2";
import {useLocation} from 'react-router-dom'
export const Hero=()=>{
  const [headerText,setHeaderText]=useState('');
  let idx=1;
  const text="Your Ultimate Companion of your Coding Journey"
  useEffect(()=>{
    showText()
  },[])
  function showText(){
    setHeaderText(text.slice(0,idx))
    idx++;

    setTimeout(showText,100)
}

    return(
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* ================= HERO SECTION ================= */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master Data Structures & Algorithms, Organized.
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Ditch the spreadsheets. Track your progress, manage multiple solutions, 
            and streamline your technical interview preparation with a dedicated DSA companion.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/problems">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto">
                Start Solving Now
              </button>
            </Link>
            <Link to="/sheets">
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
                Explore DSA Sheets
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* ================= FEATURES GRID ================= */}
      <section className="py-16 px-5 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why CodeMate?</h2>
          <p className="text-gray-600 mt-2">Everything you need to crack the interview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7m0 0L9 4" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Structured Roadmaps</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Stop wandering aimlessly. Access integrated roadmaps like <strong>Love Babbar 450</strong> or <strong>Striver’s SDE Sheet</strong> to systematically destroy weak areas.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Tracking & Notes</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Jot down intuition, edge cases, and Time Complexity directly. Tag questions as <em>Pending</em>, <em>Solved</em>, or <em>Revise Later</em>.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Solution Repository</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Save your Brute Force attempt next to your Optimized approach. Build a personal library of clean code snippets for future reference.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Active Revision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our "Spaced Repetition" friendly interface filters noise, focusing strictly on starred and tricky problems ensuring concepts stick.
            </p>
          </div>

        </div>
      </section>

      {/* ================= DETAILED SECTIONS (ZIG ZAG) ================= */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Visualize Your Progress</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Visual indicators show your completion rates per topic. Seeing that progress bar fill up gives you the motivation to solve "just one more" problem and maintain your streak.
              </p>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-blue-700">Arrays</span>
                  <span className="text-sm font-medium text-blue-700">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-blue-50 p-8 rounded-2xl flex items-center justify-center h-64 border-2 border-dashed border-blue-200">
              <span className="text-blue-400 font-semibold">Progress Dashboard Preview</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Last-Minute Prep Tool</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Use our <strong>Quick-Look Cards</strong> to view problem statements and your personal logic side-by-side. Refresh your memory on complex patterns minutes before the interview without re-coding the entire solution.
              </p>
            </div>
            <div className="flex-1 bg-yellow-50 p-8 rounded-2xl flex items-center justify-center h-64 border-2 border-dashed border-yellow-200">
              <span className="text-yellow-600 font-semibold">Revision Cards Preview</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER / CTA ================= */}
      <section className="bg-gray-900 text-white py-16 text-center px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">"Coding interviews are hard. Organizing your prep shouldn't be."</h2>
          <p className="text-gray-400 mb-8 text-lg">Join thousands of developers acing their dream roles.</p>
          <Link to="/signup">
            <button className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-transform transform hover:scale-105 shadow-xl">
              Build Your CheatSheet Today
            </button>
          </Link>
        </div>
      </section>

    </div>
    )
}