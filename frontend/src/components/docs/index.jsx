import { useState } from "react";
import { FaRobot, FaCode, FaBrain, FaLightbulb, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { BiCodeBlock } from "react-icons/bi";
import { HiLightningBolt } from "react-icons/hi";

export const DocsComponent = () => {


  return (
<div className="bg-slate-950 text-slate-300 py-24 px-6">
  <div className="max-w-6xl mx-auto">

    {/* WHY IT EXISTS */}
    <div className="mb-24">

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Why Codemate Exists
      </h2>

      <div className="max-w-3xl space-y-6 text-slate-400 leading-relaxed text-lg">
        <p>
          Most developers solve 100+ DSA problems — but forget the approach after a few weeks.
          Before interviews, re-coding everything becomes impossible.
        </p>

        <p>
          Reading full solutions doesn’t build recall. Manual notes break consistency.
          Preparation becomes reactive instead of structured.
        </p>

        <p className="text-slate-200 font-medium">
          Codemate exists to turn solved problems into structured,
          1-minute revision units — so you revise thinking, not typing.
        </p>
      </div>
    </div>


    {/* Divider */}
    <div className="h-px bg-slate-800 mb-24"></div>


    {/* HOW IT WORKS */}
    <div>

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Step 1 */}
        <div className="space-y-4">
          <div className="text-indigo-400 font-semibold text-sm tracking-wide">
            STEP 01
          </div>
          <h3 className="text-white text-xl font-semibold">
            Paste Your Code
          </h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            After solving a problem on LeetCode, GFG, or Codeforces,
            paste your solution and problem link into Codemate.
          </p>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="text-indigo-400 font-semibold text-sm tracking-wide">
            STEP 02
          </div>
          <h3 className="text-white text-xl font-semibold">
            AI Extracts Structure
          </h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            Codemate analyzes your solution and generates a compressed,
            interview-ready approach summary along with time and space complexity.
          </p>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="text-indigo-400 font-semibold text-sm tracking-wide">
            STEP 03
          </div>
          <h3 className="text-white text-xl font-semibold">
            Revise in Rapid Fire
          </h3>
          <p className="text-slate-400 leading-relaxed text-sm">
            Problems are shown without code. You recall the logic.
            This strengthens memory before interviews.
          </p>
        </div>

      </div>
    </div>


    {/* Closing */}
    <div className="mt-24 max-w-3xl text-slate-500 text-sm leading-relaxed">
      Codemate is built for long-term retention — not streaks.
      It removes friction from revision and keeps your focus on structured thinking under pressure.
    </div>

  </div>
</div>


  );
};