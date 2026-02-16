import { useState } from "react";
import { FaRobot, FaBrain, FaChartLine, FaLightbulb, FaShieldAlt, FaCode } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { Hero } from "../../components/home"; // Assuming this path exists based on your snippet

export const Features = () => {
const features = [
  {
    icon: <FaBrain className="text-2xl text-white" />,
    title: "Structured Problem Summaries",
    description:
      "Convert your solved problems into concise, interview-ready summaries including approach, data structures used, and complexity — all in one place.",
    bgGradient: "bg-gradient-to-br from-indigo-500 to-cyan-500",
    border: "hover:border-indigo-200"
  },
  {
    icon: <FaLightbulb className="text-2xl text-white" />,
    title: "Rapid Fire Revision",
    description:
      "Switch to logic-only revision mode. No code shown — just the problem and your understanding. Designed to strengthen recall before interviews.",
    bgGradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    border: "hover:border-purple-200"
  },
  {
    icon: <FaChartLine className="text-2xl text-white" />,
    title: "Preparation Insights",
    description:
      "Track your revision consistency and identify weak areas across data structures and algorithms with clear preparation insights.",
    bgGradient: "bg-gradient-to-br from-orange-500 to-red-500",
    border: "hover:border-orange-200"
  },
  {
    icon: <FaCode className="text-2xl text-white" />,
    title: "Personal DSA Sheets",
    description:
      "Create structured sheets like Blind 75 or Top 100. Organize problems intentionally instead of randomly solving from different platforms.",
    bgGradient: "bg-gradient-to-br from-blue-500 to-indigo-500",
    border: "hover:border-blue-200"
  },
  {
    icon: <FaShieldAlt className="text-2xl text-white" />,
    title: "Clean & Verified Entries",
    description:
      "Every saved problem is validated and structured for consistency, so your revision bank stays reliable and organized.",
    bgGradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
    border: "hover:border-emerald-200"
  },
  {
    icon: <FaRobot className="text-2xl text-white" />,
    title: "Low-Friction Workflow",
    description:
      "Simply paste your solution and link. Codemate handles structuring so you stay consistent even on busy days.",
    bgGradient: "bg-gradient-to-br from-pink-500 to-rose-500",
    border: "hover:border-pink-200"
  }
];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorators matching the Docs Header style */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Section Header */}
<div className="text-center max-w-3xl mx-auto mb-16">
  <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold">
    <IoSparkles className="animate-pulse" />
    Built for Structured Preparation
  </div>
  
  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
    Designed for <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
      Long-Term DSA Retention
    </span>
  </h2>
  
  <p className="text-xl text-slate-600 leading-relaxed">
    Codemate focuses on recall, structure, and consistency — 
    helping you revise smarter instead of re-solving everything before interviews.
  </p>
</div>


        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${feature.border}`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg ${feature.bgGradient} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <Hero />
      <Features />
      {/* You can add the DocsComponent here or link to it separately */}
    </div>
  );
};

export default LandingPage;