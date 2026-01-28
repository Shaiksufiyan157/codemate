// import { useState ,useEffect, use} from "react"
// import { Link } from "react-router-dom";
// export const Hero=()=>{
//   const [headerText,setHeaderText]=useState('');
//   let idx=1;
//   const text="Your Ultimate Companion of your Coding Journey"
//   useEffect(()=>{
//     showText()
//   },[])
//   function showText(){
//     setHeaderText(text.slice(0,idx))
//     idx++;

//     setTimeout(showText,100)
// }

//     return(
//         <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
//       {/* ================= HERO SECTION ================= */}
//       <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-5 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//             Master Data Structures & Algorithms, Organized.
//           </h1>
//           <p className="text-lg md:text-2xl text-blue-100 mb-10 leading-relaxed">
//             Ditch the spreadsheets. Track your progress, manage multiple solutions, 
//             and streamline your technical interview preparation with a dedicated DSA companion.
//           </p>
          
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link to="/problems">
//               <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto">
//                 Start Solving Now
//               </button>
//             </Link>
//             <Link to="/sheets">
//               <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
//                 Explore DSA Sheets
//               </button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* ================= FEATURES GRID ================= */}
//       <section className="py-16 px-5 max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900">Why CodeMate?</h2>
//           <p className="text-gray-600 mt-2">Everything you need to crack the interview</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Feature 1 */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7m0 0L9 4" /></svg>
//             </div>
//             <h3 className="text-xl font-bold mb-2">Structured Roadmaps</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Stop wandering aimlessly. Access integrated roadmaps like <strong>Love Babbar 450</strong> or <strong>Striver’s SDE Sheet</strong> to systematically destroy weak areas.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
//             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
//             </div>
//             <h3 className="text-xl font-bold mb-2">Smart Tracking & Notes</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Jot down intuition, edge cases, and Time Complexity directly. Tag questions as <em>Pending</em>, <em>Solved</em>, or <em>Revise Later</em>.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
//             <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
//             </div>
//             <h3 className="text-xl font-bold mb-2">Solution Repository</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Save your Brute Force attempt next to your Optimized approach. Build a personal library of clean code snippets for future reference.
//             </p>
//           </div>

//           {/* Feature 4 */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
//             <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 text-red-600">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
//             </div>
//             <h3 className="text-xl font-bold mb-2">Active Revision</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Our "Spaced Repetition" friendly interface filters noise, focusing strictly on starred and tricky problems ensuring concepts stick.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* ================= DETAILED SECTIONS (ZIG ZAG) ================= */}
//       <section className="bg-white py-16 px-5">
//         <div className="max-w-6xl mx-auto space-y-20">
          
//           {/* Row 1 */}
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="flex-1">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Visualize Your Progress</h3>
//               <p className="text-lg text-gray-600 leading-relaxed mb-6">
//                 Visual indicators show your completion rates per topic. Seeing that progress bar fill up gives you the motivation to solve "just one more" problem and maintain your streak.
//               </p>
//               <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-blue-700">Arrays</span>
//                   <span className="text-sm font-medium text-blue-700">70%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '70%'}}></div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 bg-blue-50 p-8 rounded-2xl flex items-center justify-center h-64 border-2 border-dashed border-blue-200">
//               <span className="text-blue-400 font-semibold">Progress Dashboard Preview</span>
//             </div>
//           </div>

//           {/* Row 2 */}
//           <div className="flex flex-col md:flex-row-reverse items-center gap-12">
//             <div className="flex-1">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Last-Minute Prep Tool</h3>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Use our <strong>Quick-Look Cards</strong> to view problem statements and your personal logic side-by-side. Refresh your memory on complex patterns minutes before the interview without re-coding the entire solution.
//               </p>
//             </div>
//             <div className="flex-1 bg-yellow-50 p-8 rounded-2xl flex items-center justify-center h-64 border-2 border-dashed border-yellow-200">
//               <span className="text-yellow-600 font-semibold">Revision Cards Preview</span>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ================= FOOTER / CTA ================= */}
//       <section className="bg-gray-900 text-white py-16 text-center px-5">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">"Coding interviews are hard. Organizing your prep shouldn't be."</h2>
//           <p className="text-gray-400 mb-8 text-lg">Join thousands of developers acing their dream roles.</p>
//           <Link to="/signup">
//             <button className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-transform transform hover:scale-105 shadow-xl">
//               Build Your CheatSheet Today
//             </button>
//           </Link>
//         </div>
//       </section>

//     </div>
//     )
// }
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaChartLine, FaCode, FaHistory, FaArrowRight, FaCheckCircle } from "react-icons/fa";

export const Hero = () => {
  const [headerText, setHeaderText] = useState('');
  const fullText = "Your Ultimate Companion for your Coding Journey";

  // Improved Typewriter Effect
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setHeaderText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 50); // Speed of typing

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* ================= HERO SECTION ================= */}
      {/* Changed to Dark Slate/Indigo Gradient to match Navbar */}
      <header className="bg-slate-900 relative overflow-hidden pt-24 pb-32 px-5 text-center">
        
        {/* Background Decorative Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl -z-0 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 text-sm font-semibold tracking-wide">
             🚀 Ace your next technical interview
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white tracking-tight">
            Master Data Structures <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              & Algorithms, Organized.
            </span>
          </h1>
          
          {/* Typewriter Text */}
          <div className="h-8 mb-8">
            <p className="text-lg md:text-xl text-slate-400 font-mono">
              {headerText}<span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Ditch the messy spreadsheets. Track your progress, manage multiple solutions, 
            and streamline your preparation with a dedicated DSA companion.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/problems">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2">
                Start Solving Now <FaArrowRight size={16} />
              </button>
            </Link>
            <Link to="/sheets">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 border border-slate-700 text-gray-300 rounded-lg font-bold text-lg hover:bg-slate-700 hover:text-white transition-all">
                Explore DSA Sheets
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* ================= FEATURES GRID ================= */}
      <section className="py-20 px-5 max-w-7xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
              <FaMapMarkedAlt size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Structured Roadmaps</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Access integrated roadmaps like <strong>Love Babbar 450</strong> or <strong>Striver’s Sheet</strong> to systematically destroy weak areas.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
              <FaChartLine size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Tracking</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Jot down intuition and Time Complexity. Tag questions as <em>Pending</em> or <em>Solved</em> to visualize growth.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <FaCode size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Solution Repository</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Save your Brute Force attempt next to your Optimized approach. Build a personal library of code snippets.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4 text-amber-600">
              <FaHistory size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Active Revision</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Filter noise and focus strictly on starred and tricky problems ensuring concepts actually stick.
            </p>
          </div>

        </div>
      </section>

      {/* ================= DETAILED SECTIONS (ZIG ZAG) ================= */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Row 1: Visualization */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide">
                Analytics
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Visualize Your Progress</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Visual indicators show your completion rates per topic. Seeing that progress bar fill up gives you the motivation to solve "just one more" problem and maintain your streak.
              </p>
              
              <ul className="space-y-3">
                {['Track Data Structure coverage', 'Identify weak topics instantly', 'Maintain daily streaks'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        {item}
                    </li>
                ))}
              </ul>
            </div>

            {/* Mock UI: Progress Card */}
            <div className="flex-1 order-1 md:order-2 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-inner">
               <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between mb-2">
                     <span className="font-bold text-slate-700">Arrays & Hashing</span>
                     <span className="font-bold text-indigo-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 mb-6">
                     <div className="bg-indigo-600 h-3 rounded-full" style={{width: '75%'}}></div>
                  </div>

                  <div className="flex justify-between mb-2">
                     <span className="font-bold text-slate-700">Dynamic Programming</span>
                     <span className="font-bold text-amber-500">30%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                     <div className="bg-amber-500 h-3 rounded-full" style={{width: '30%'}}></div>
                  </div>
               </div>
            </div>
          </div>

          {/* Row 2: Revision Cards */}
          <div className="flex flex-col md:flex-row items-center gap-12">
             {/* Mock UI: Code Card */}
            <div className="flex-1 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
               <div className="space-y-3 font-mono text-sm">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="pt-2">
                     <p className="text-purple-400">const <span className="text-blue-400">solve</span> = (nums) ={'>'} {'{'}</p>
                     <p className="text-gray-400 pl-4">// Logic: Use Hashmap for O(n)</p>
                     <p className="text-indigo-300 pl-4">let map = new Map();</p>
                     <p className="text-gray-300 pl-4">...</p>
                     <p className="text-purple-400">{'}'}</p>
                  </div>
               </div>
            </div>

            <div className="flex-1">
              <div className="inline-block px-3 py-1 mb-3 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wide">
                Revision
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Last-Minute Prep Tool</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Use our <strong>Quick-Look Cards</strong> to view problem statements and your personal logic side-by-side. Refresh your memory on complex patterns minutes before the interview without re-coding the entire solution.
              </p>
              <Link to="/signup" className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-2">
                Create your first card <FaArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CTA FOOTER ================= */}
      <section className="bg-slate-900 text-white py-20 text-center px-5 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">"Coding interviews are hard. <br/>Organizing your prep shouldn't be."</h2>
          <p className="text-slate-400 mb-10 text-lg">Join thousands of developers acing their dream roles.</p>
          <Link to="/signup">
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-500 transition-all transform hover:scale-105 shadow-xl shadow-indigo-900/50">
              Build Your CheatSheet Today
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};