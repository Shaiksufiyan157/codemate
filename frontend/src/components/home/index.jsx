import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  const [headerText, setHeaderText] = useState('');
  const fullText = "Your Ultimate Companion for your Coding Journey";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setHeaderText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
<div className="min-h-screen bg-slate-50 font-sans text-slate-800">

  <header className="bg-slate-900 relative overflow-hidden pt-24 pb-32 px-5 text-center">

    {/* Background Glow - Made slightly more "AI Purple" */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl -z-0 pointer-events-none"></div>

    <div className="max-w-5xl mx-auto relative z-10">
      
      {/* 1. UPDATED BADGE: Highlights the specific "Auto-fill" benefit [cite: 72] */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 text-sm font-semibold tracking-wide hover:bg-slate-750 transition-colors cursor-default">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        New: AI-Powered Auto-Documentation
      </div>

      {/* 2. UPDATED HEADLINE: Emphasizes the "Smart" aspect  */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white tracking-tight">
        Master Data Structures <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
          with an AI Copilot.
        </span>
      </h1>

      {/* Dynamic Typing Effect (Existing) */}
      <div className="h-8 mb-8">
        <p className="text-lg md:text-xl text-slate-400 font-mono">
          {headerText}<span className="animate-pulse">|</span>
        </p>
      </div>

      {/* 3. UPDATED DESCRIPTION: Explains the "Manual Entry vs AI" value prop [cite: 71, 72] */}
      <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
        Stop wasting time on manual paperwork. Simply paste your code, and let our 
        <span className="text-indigo-400 font-semibold"> Smart Assistant </span> 
        automatically generate explanations, time complexity, and tags for you.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/problems">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 group">
            <span className="group-hover:scale-110 transition-transform">✨</span> Try AI Mode Now
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
</div>
  );
};