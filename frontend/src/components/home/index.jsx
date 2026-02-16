import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [headerText, setHeaderText] = useState('');
  const fullText = "Turn solved problems into 1-minute revision cards.";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setHeaderText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, []);

  return (
<div className="min-h-screen bg-slate-50 font-sans text-slate-800">

  <header className="bg-slate-900 relative overflow-hidden pt-24 pb-32 px-5 text-center">

    {/* Background Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl -z-0 pointer-events-none"></div>

    <div className="max-w-5xl mx-auto relative z-10">
      
      {/* Repositioned Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 text-sm font-semibold tracking-wide hover:bg-slate-750 transition-colors cursor-default">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        Built for Interview Recall
      </div>

      {/* Updated Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white tracking-tight">
        Revise 100+ DSA Problems <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
          Without Re-Coding Them.
        </span>
      </h1>

      {/* Typing Effect */}
      <div className="h-8 mb-8">
        <p className="text-lg md:text-xl text-slate-400 font-mono">
          {headerText}
          <span className="animate-pulse">|</span>
        </p>
      </div>

      {/* Updated Description */}
      <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
        DSA preparation isn’t about solving problems once — it’s about remembering 
        the approach when it matters. Codemate structures your solved problems into 
        concise, interview-ready summaries so you can revise faster and retain longer.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/problems">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 group">
            <span className="group-hover:scale-110 transition-transform">🧠</span>
            Start Revising Smarter
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
