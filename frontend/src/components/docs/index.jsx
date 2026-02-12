import { useState } from "react";
import { FaRobot, FaCode, FaBrain, FaLightbulb, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { BiCodeBlock } from "react-icons/bi";
import { HiLightningBolt } from "react-icons/hi";

export const DocsComponent = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview", icon: <IoSparkles /> },
    { id: "ai-features", label: "AI Features", icon: <FaRobot /> },
    { id: "architecture", label: "Architecture", icon: <BiCodeBlock /> },
    { id: "components", label: "Components", icon: <FaCode /> },
    { id: "backend", label: "Backend", icon: <FaShieldAlt /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Header */}
      <header className="bg-slate-900 relative overflow-hidden pt-20 pb-24 px-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-semibold">
            <FaRobot className="animate-pulse" />
            AI-Powered Documentation
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white tracking-tight">
            Codemate<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400"> Technical Docs</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
            Deep dive into the architecture, AI integration, and technical implementation 
            of your intelligent DSA companion.
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm">
              ⚡ React + Redux
            </div>
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm">
              🤖 AI-Powered Analysis
            </div>
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm">
              🔐 JWT Authentication
            </div>
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm">
              📊 MongoDB + Express
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Navigation</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left transition-all ${
                      activeSection === section.id
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <span className="font-semibold text-sm">{section.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:col-span-3">
            {/* Overview Section */}
            {activeSection === "overview" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                    <IoSparkles className="text-indigo-600" />
                    Project Overview
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Codemate is an intelligent DSA revision platform that combines manual problem tracking 
                    with cutting-edge AI automation to streamline your coding interview preparation.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-lg border border-indigo-100">
                      <div className="flex items-center gap-2 mb-2">
                        <FaBrain className="text-indigo-600 text-xl" />
                        <h4 className="font-bold text-slate-900">Smart Tracking</h4>
                      </div>
                      <p className="text-sm text-slate-600">
                        Organize problems with intelligent tagging, filtering, and multi-approach solutions
                      </p>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-cyan-50 to-indigo-50 rounded-lg border border-cyan-100">
                      <div className="flex items-center gap-2 mb-2">
                        <FaRobot className="text-cyan-600 text-xl" />
                        <h4 className="font-bold text-slate-900">AI Automation</h4>
                      </div>
                      <p className="text-sm text-slate-600">
                        Auto-generate problem statements, complexity analysis, and algorithm tags
                      </p>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                      <div className="flex items-center gap-2 mb-2">
                        <FaChartLine className="text-purple-600 text-xl" />
                        <h4 className="font-bold text-slate-900">Progress Insights</h4>
                      </div>
                      <p className="text-sm text-slate-600">
                        Track your revision with filters, rapid-fire mode, and shareable sheets
                      </p>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-pink-50 to-orange-50 rounded-lg border border-pink-100">
                      <div className="flex items-center gap-2 mb-2">
                        <FaLightbulb className="text-orange-600 text-xl" />
                        <h4 className="font-bold text-slate-900">Community Sheets</h4>
                      </div>
                      <p className="text-sm text-slate-600">
                        Publish and explore curated DSA problem collections from the community
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-cyan-400 font-mono text-sm mb-1">Frontend</div>
                      <div className="text-white font-semibold">React 18</div>
                      <div className="text-slate-400 text-sm">Redux Toolkit</div>
                    </div>
                    <div>
                      <div className="text-cyan-400 font-mono text-sm mb-1">Backend</div>
                      <div className="text-white font-semibold">Express.js</div>
                      <div className="text-slate-400 text-sm">Node.js</div>
                    </div>
                    <div>
                      <div className="text-cyan-400 font-mono text-sm mb-1">Database</div>
                      <div className="text-white font-semibold">MongoDB</div>
                      <div className="text-slate-400 text-sm">Mongoose ODM</div>
                    </div>
                    <div>
                      <div className="text-cyan-400 font-mono text-sm mb-1">AI Engine</div>
                      <div className="text-white font-semibold">OpenRouter</div>
                      <div className="text-slate-400 text-sm">LLM Integration</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AI Features Section */}
            {activeSection === "ai-features" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-xl shadow-lg p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <FaRobot className="text-4xl" />
                    <h2 className="text-3xl font-extrabold">AI-Powered Intelligence</h2>
                  </div>
                  <p className="text-lg text-indigo-100 leading-relaxed">
                    The heart of Codemate's automation - transforming raw code into structured, 
                    analyzable data through advanced language models.
                  </p>
                </div>

                {/* AI Integration Overview */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <HiLightningBolt className="text-yellow-500" />
                    How AI Integration Works
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">User Input</h4>
                        <p className="text-slate-600 leading-relaxed">
                          User pastes their solution code and problem link into the AI-enabled form. 
                          The system captures raw, unformatted code - no manual metadata required.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">Backend Processing</h4>
                        <p className="text-slate-600 leading-relaxed mb-3">
                          The code is sent to the <code className="px-2 py-1 bg-slate-100 rounded text-sm font-mono">/ai</code> endpoint, 
                          which acts as a proxy to OpenRouter's LLM API. A carefully engineered system prompt 
                          instructs the AI to extract structured data.
                        </p>
                        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm text-cyan-400 font-mono">
{`POST /ai
{
  "code": "function twoSum(nums, target) {...}",
  "link": "https://leetcode.com/problems/two-sum"
}`}
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">AI Analysis</h4>
                        <p className="text-slate-600 leading-relaxed mb-3">
                          The LLM reads the code like a human expert would, identifying:
                        </p>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span><strong>Algorithm Classification:</strong> Hash Map, Two Pointer, Binary Search, etc.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span><strong>Data Structures Used:</strong> Arrays, Trees, Graphs, Heaps</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span><strong>Time Complexity:</strong> O(n), O(log n), O(n²)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span><strong>Space Complexity:</strong> Memory usage analysis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span><strong>Approach Summary:</strong> Natural language explanation of the solution strategy</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">Structured Output</h4>
                        <p className="text-slate-600 leading-relaxed mb-3">
                          The AI returns a strict JSON schema. The backend sanitizes the response 
                          (removing markdown artifacts) and validates the structure before sending to frontend.
                        </p>
                        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm text-green-400 font-mono">
{`{
  "problem": "Two Sum",
  "approach": "Use hash map for O(1) lookups...",
  "timeComplexity": "O(n)",
  "spaceComplexity": "O(n)",
  "algorithms": ["Hash Map", "Two Pointer"],
  "dataStructures": ["Array", "Hash Table"]
}`}
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">Auto-Population</h4>
                        <p className="text-slate-600 leading-relaxed">
                          The frontend receives the parsed data and dispatches Redux actions to automatically 
                          fill all form fields. The user reviews, makes any adjustments, and saves - 
                          reducing data entry time from minutes to seconds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Deep Dive */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Implementation</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <BiCodeBlock className="text-indigo-600" />
                        Advanced Prompt Engineering
                      </h4>
                      <p className="text-slate-600 mb-3">
                        The system uses an enhanced <code className="px-2 py-1 bg-slate-100 rounded text-sm">SYSTEM_INSTRUCTION</code> 
                        with built-in validation logic. This intelligent prompt performs input classification before processing, 
                        ensuring robust error handling and consistent data extraction:
                      </p>
                      <div className="bg-slate-900 rounded-lg p-5 overflow-x-auto">
                        <pre className="text-xs text-slate-300 font-mono leading-relaxed">
{`const SYSTEM_INSTRUCTION = \`
You are a strict data processor for "Codemate". 
Your ONLY job is to validate input and extract metadata.

**STEP 1: CLASSIFY THE INPUT**
Analyze the raw user input and determine which category it falls into:

1. **CATEGORY A: Valid Code Snippet**
   * Must look like actual programming code (C++, Java, Python, JS, etc.)
   * Must contain programming keywords (e.g., def, int, function, class, {})
   
2. **CATEGORY B: Valid Problem Link**
   * Must be a well-formed URL starting with http:// or https://
   * Must point to a known domain (e.g., leetcode.com, geeksforgeeks.org)
   
3. **CATEGORY C: Invalid / Gibberish**
   * Random keystrokes (e.g., "asdfjkl", "hgsfd")
   * Conversational text with no code (e.g., "hello", "how are you")
   * Malformed URLs (e.g., "leetcode/two-sum" without https)
   * Broken or incomplete code fragments that lack logic

**STEP 2: EXECUTE BASED ON CATEGORY**

IF CATEGORY C (Invalid):
Output EXACTLY this JSON and nothing else:
{ 
  "error": "Invalid input: Please provide a valid code snippet 
            or a complete URL (starting with https://)." 
}

IF CATEGORY A or B (Valid):
Output strictly valid JSON with no markdown:
{
  "problem_statement": "The standard LeetCode/GFG title",
  "approach_1": "Concise explanation (include Time/Space complexity)",
  "approach_2": "A standard alternative approach",
  "ds": "Comma-separated list of Data Structures used",
  "algo": "Comma-separated list of Algorithms used",
  "link": "The URL if provided, otherwise null",
  "code": "The input code stripped of unnecessary whitespace"
}
\`;`}
                        </pre>
                      </div>

                      <div className="mt-4 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-5">
                        <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                          <IoSparkles className="text-indigo-600" />
                          Why This Approach is Superior
                        </h5>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-0.5">✓</span>
                            <span><strong>Input Validation:</strong> AI acts as first line of defense against garbage input</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-0.5">✓</span>
                            <span><strong>Graceful Degradation:</strong> Returns structured error messages instead of crashing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-0.5">✓</span>
                            <span><strong>Multi-Format Support:</strong> Handles both code snippets AND problem links intelligently</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-0.5">✓</span>
                            <span><strong>Dual Approach Generation:</strong> Provides primary solution + alternative approach</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <FaShieldAlt className="text-cyan-600" />
                        Security & Privacy
                      </h4>
                      <p className="text-slate-600 mb-3">
                        The AI endpoint acts as a secure proxy layer:
                      </p>
                      <ul className="space-y-2 text-slate-600 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600">→</span>
                          <span>API keys are stored server-side only, never exposed to frontend</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600">→</span>
                          <span>User code is processed in memory and never persisted during AI analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600">→</span>
                          <span>Response streaming ensures low latency even with large code blocks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-600">→</span>
                          <span>Regex sanitization prevents injection attacks in AI responses</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Validation System */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <FaShieldAlt className="text-indigo-600" />
                    Three-Tier Validation System
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Codemate implements a robust three-layer validation architecture to ensure data integrity 
                    and prevent malformed inputs from corrupting the database or degrading user experience.
                  </p>

                  <div className="space-y-6">
                    {/* Tier 1: AI-Level Classification */}
                    <div className="border-2 border-indigo-200 rounded-xl p-6 bg-gradient-to-r from-indigo-50 to-transparent">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                          1
                        </div>
                        <h4 className="text-xl font-bold text-slate-900">AI-Level Input Classification</h4>
                      </div>
                      
                      <p className="text-slate-600 mb-4">
                        The LLM itself acts as an intelligent validator <strong>before</strong> any processing occurs. 
                        It categorizes input into three distinct types:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-white border border-green-200 rounded-lg p-4">
                          <div className="text-green-600 font-bold mb-2 flex items-center gap-2">
                            <span className="text-2xl">✓</span>
                            Category A
                          </div>
                          <div className="text-sm font-semibold text-slate-900 mb-1">Valid Code Snippet</div>
                          <ul className="text-xs text-slate-600 space-y-1">
                            <li>• Contains programming keywords</li>
                            <li>• Recognizable language syntax</li>
                            <li>• Logical structure present</li>
                          </ul>
                        </div>

                        <div className="bg-white border border-blue-200 rounded-lg p-4">
                          <div className="text-blue-600 font-bold mb-2 flex items-center gap-2">
                            <span className="text-2xl">✓</span>
                            Category B
                          </div>
                          <div className="text-sm font-semibold text-slate-900 mb-1">Valid Problem Link</div>
                          <ul className="text-xs text-slate-600 space-y-1">
                            <li>• Well-formed URL</li>
                            <li>• Starts with http:// or https://</li>
                            <li>• Known domain (LeetCode, GFG)</li>
                          </ul>
                        </div>

                        <div className="bg-white border border-red-200 rounded-lg p-4">
                          <div className="text-red-600 font-bold mb-2 flex items-center gap-2">
                            <span className="text-2xl">✗</span>
                            Category C
                          </div>
                          <div className="text-sm font-semibold text-slate-900 mb-1">Invalid / Gibberish</div>
                          <ul className="text-xs text-slate-600 space-y-1">
                            <li>• Random keystrokes</li>
                            <li>• Conversational text</li>
                            <li>• Malformed URLs</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-lg p-4">
                        <div className="text-xs text-slate-400 mb-2">Example Invalid Input Response:</div>
                        <pre className="text-sm text-red-400 font-mono">
{`{
  "error": "Invalid input: Please provide a valid code snippet 
            or a complete URL (starting with https://)."
}`}
                        </pre>
                      </div>
                    </div>

                    {/* Tier 2: Backend Sanitization */}
                    <div className="border-2 border-cyan-200 rounded-xl p-6 bg-gradient-to-r from-cyan-50 to-transparent">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                          2
                        </div>
                        <h4 className="text-xl font-bold text-slate-900">Backend Sanitization Layer</h4>
                      </div>
                      
                      <p className="text-slate-600 mb-4">
                        Even after AI validation, the backend performs additional checks to ensure data safety:
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                          <div className="text-cyan-600 text-xl">🧹</div>
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">Markdown Artifact Removal</div>
                            <p className="text-sm text-slate-600 mb-2">
                              Strips any accidental markdown formatting (backticks, code blocks) that the LLM might include despite instructions
                            </p>
                            <code className="text-xs bg-slate-100 px-2 py-1 rounded">
                              .replace(/```json|```/g, '').trim()
                            </code>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                          <div className="text-cyan-600 text-xl">🔍</div>
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">JSON Schema Validation</div>
                            <p className="text-sm text-slate-600">
                              Attempts to parse the response. If parsing fails, returns an error to frontend instead of crashing
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                          <div className="text-cyan-600 text-xl">🛡️</div>
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">Injection Prevention</div>
                            <p className="text-sm text-slate-600">
                              Regex sanitization prevents script injection or malicious payloads in AI-generated content
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tier 3: Frontend Validation */}
                    <div className="border-2 border-purple-200 rounded-xl p-6 bg-gradient-to-r from-purple-50 to-transparent">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          3
                        </div>
                        <h4 className="text-xl font-bold text-slate-900">Frontend Client-Side Validation</h4>
                      </div>
                      
                      <p className="text-slate-600 mb-4">
                        The final safety net before submission to the database:
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                          <div className="text-purple-600 text-xl">📝</div>
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">Required Field Checking</div>
                            <p className="text-sm text-slate-600">
                              Ensures critical fields (problem statement, approach, code) are not empty before allowing submission
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                          <div className="text-purple-600 text-xl">🎯</div>
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">Smart Focus on Errors</div>
                            <p className="text-sm text-slate-600 mb-2">
                              Uses <code className="px-1.5 py-0.5 bg-slate-100 rounded text-xs">useRef</code> to programmatically 
                              focus the first invalid field, guiding user attention to what needs fixing
                            </p>
                            <div className="bg-slate-900 rounded p-3 mt-2">
                              <pre className="text-xs text-slate-300 font-mono">
{`if (!state.problem) {
  problemRef.current.focus();
  toast.error("Problem statement required");
  return;
}`}
                              </pre>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                          <div className="text-purple-600 text-xl">💬</div>
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">User Feedback</div>
                            <p className="text-sm text-slate-600">
                              Toast notifications provide immediate, non-intrusive feedback about validation failures
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Validation Flow Diagram */}
                  <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <HiLightningBolt className="text-yellow-400" />
                      Complete Validation Flow
                    </h4>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">→</span>
                        <span>User submits input</span>
                      </div>
                      <div className="flex items-center gap-2 pl-4">
                        <span className="text-cyan-400">→</span>
                        <span className="text-indigo-300">[Tier 1] AI classifies as Category A/B/C</span>
                      </div>
                      <div className="flex items-center gap-2 pl-8">
                        <span className="text-cyan-400">→</span>
                        <span>If Category C: Return error JSON immediately</span>
                      </div>
                      <div className="flex items-center gap-2 pl-8">
                        <span className="text-cyan-400">→</span>
                        <span>If Category A/B: Extract metadata as JSON</span>
                      </div>
                      <div className="flex items-center gap-2 pl-4">
                        <span className="text-cyan-400">→</span>
                        <span className="text-cyan-300">[Tier 2] Backend sanitizes response</span>
                      </div>
                      <div className="flex items-center gap-2 pl-8">
                        <span className="text-cyan-400">→</span>
                        <span>Remove markdown artifacts</span>
                      </div>
                      <div className="flex items-center gap-2 pl-8">
                        <span className="text-cyan-400">→</span>
                        <span>Validate JSON structure</span>
                      </div>
                      <div className="flex items-center gap-2 pl-4">
                        <span className="text-cyan-400">→</span>
                        <span className="text-purple-300">[Tier 3] Frontend validates fields</span>
                      </div>
                      <div className="flex items-center gap-2 pl-8">
                        <span className="text-cyan-400">→</span>
                        <span>Check required fields are present</span>
                      </div>
                      <div className="flex items-center gap-2 pl-8">
                        <span className="text-cyan-400">→</span>
                        <span>Focus on errors if validation fails</span>
                      </div>
                      <div className="flex items-center gap-2 pl-4">
                        <span className="text-green-400">✓</span>
                        <span className="text-green-300">Data saved to MongoDB if all checks pass</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-lg p-6">
                    <div className="text-3xl mb-3">⚡</div>
                    <h4 className="font-bold text-slate-900 mb-2">10x Faster Entry</h4>
                    <p className="text-sm text-slate-600">
                      Reduces problem entry time from 5+ minutes to under 30 seconds
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 rounded-lg p-6">
                    <div className="text-3xl mb-3">🎯</div>
                    <h4 className="font-bold text-slate-900 mb-2">100% Accuracy</h4>
                    <p className="text-sm text-slate-600">
                      AI correctly identifies algorithm patterns with expert-level precision
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
                    <div className="text-3xl mb-3">🧠</div>
                    <h4 className="font-bold text-slate-900 mb-2">Learning Aid</h4>
                    <p className="text-sm text-slate-600">
                      Auto-generated explanations help understand complexity analysis
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Architecture Section */}
            {activeSection === "architecture" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                    <BiCodeBlock className="text-indigo-600" />
                    System Architecture
                  </h2>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">State Management Architecture</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Codemate uses <strong>Redux Toolkit</strong> for centralized state management with a modular slice architecture:
                    </p>

                    <div className="space-y-4">
                      <div className="border-l-4 border-indigo-600 pl-4 py-2 bg-indigo-50 rounded-r">
                        <h4 className="font-bold text-slate-900 mb-1">problemSlice.js</h4>
                        <p className="text-sm text-slate-600">
                          Manages core content (problem list), active filters (DS/Algo), and JWT token persistence 
                          via localStorage sync
                        </p>
                      </div>

                      <div className="border-l-4 border-cyan-600 pl-4 py-2 bg-cyan-50 rounded-r">
                        <h4 className="font-bold text-slate-900 mb-1">userSlice.js</h4>
                        <p className="text-sm text-slate-600">
                          Stores authenticated user profile data (username, email) for UI personalization
                        </p>
                      </div>

                      <div className="border-l-4 border-purple-600 pl-4 py-2 bg-purple-50 rounded-r">
                        <h4 className="font-bold text-slate-900 mb-1">dsaSheetsSlice.js</h4>
                        <p className="text-sm text-slate-600">
                          Handles community-shared DSA sheet collections and publication workflows
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Component Patterns</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                        <h4 className="font-semibold text-slate-900 mb-2">Container/Presentation Pattern</h4>
                        <p className="text-sm text-slate-600 mb-3">
                          HOCs like <code className="px-1.5 py-0.5 bg-white rounded text-xs">HOCSheets</code> handle 
                          data fetching and side effects, while child components focus purely on UI rendering.
                        </p>
                        <div className="text-xs font-mono text-slate-500">
                          HOCSheets → DsaSheetsPage
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                        <h4 className="font-semibold text-slate-900 mb-2">Reducer Pattern</h4>
                        <p className="text-sm text-slate-600 mb-3">
                          Complex forms use <code className="px-1.5 py-0.5 bg-white rounded text-xs">useReducer</code> instead 
                          of multiple <code className="px-1.5 py-0.5 bg-white rounded text-xs">useState</code> hooks for 
                          predictable state updates.
                        </p>
                        <div className="text-xs font-mono text-slate-500">
                          InputData + problemsReducer
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                        <h4 className="font-semibold text-slate-900 mb-2">HOC Security Pattern</h4>
                        <p className="text-sm text-slate-600 mb-3">
                          Authentication logic abstracted into <code className="px-1.5 py-0.5 bg-white rounded text-xs">withAuth</code> HOC, 
                          implementing the Decorator Pattern for protected routes.
                        </p>
                        <div className="text-xs font-mono text-slate-500">
                          withAuth(RevisionProblemPage)
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                        <h4 className="font-semibold text-slate-900 mb-2">Optimistic UI Updates</h4>
                        <p className="text-sm text-slate-600 mb-3">
                          Delete operations update Redux store immediately, providing instant feedback without 
                          waiting for server confirmation.
                        </p>
                        <div className="text-xs font-mono text-slate-500">
                          deleteProblem → removeProblemFromList
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Backend Architecture</h3>
                    <div className="bg-slate-900 rounded-lg p-6 text-white">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="text-cyan-400 text-sm font-semibold mb-2">Authentication Layer</div>
                          <div className="text-slate-300 text-sm space-y-1">
                            <div>• Passport.js JWT Strategy</div>
                            <div>• Session-less auth (stateless)</div>
                            <div>• MongoDB session store</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-cyan-400 text-sm font-semibold mb-2">API Layer</div>
                          <div className="text-slate-300 text-sm space-y-1">
                            <div>• Express.js REST endpoints</div>
                            <div>• CORS whitelist protection</div>
                            <div>• Mongoose ODM integration</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-cyan-400 text-sm font-semibold mb-2">AI Integration Layer</div>
                          <div className="text-slate-300 text-sm space-y-1">
                            <div>• OpenRouter SDK proxy</div>
                            <div>• Streaming response handling</div>
                            <div>• JSON sanitization pipeline</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Data Flow</h3>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-300">1.</span>
                      <span>User Action (UI Event)</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <span className="text-cyan-300">↓</span>
                      <span>Dispatch Redux Action</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <span className="text-cyan-300">↓</span>
                      <span>Async Thunk / API Call</span>
                    </div>
                    <div className="flex items-center gap-2 pl-12">
                      <span className="text-cyan-300">↓</span>
                      <span>Backend Route (Express)</span>
                    </div>
                    <div className="flex items-center gap-2 pl-16">
                      <span className="text-cyan-300">↓</span>
                      <span>Database Query (MongoDB)</span>
                    </div>
                    <div className="flex items-center gap-2 pl-12">
                      <span className="text-cyan-300">↓</span>
                      <span>Response JSON</span>
                    </div>
                    <div className="flex items-center gap-2 pl-8">
                      <span className="text-cyan-300">↓</span>
                      <span>Update Redux Store</span>
                    </div>
                    <div className="flex items-center gap-2 pl-4">
                      <span className="text-cyan-300">↓</span>
                      <span>Component Re-render (UI Update)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Components Section */}
            {activeSection === "components" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                    <FaCode className="text-indigo-600" />
                    Frontend Components
                  </h2>

                  <div className="space-y-6">
                    {/* InputData Component */}
                    <div className="border-l-4 border-indigo-600 pl-6 py-4 bg-gradient-to-r from-indigo-50 to-transparent">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">InputData - Problem Entry Form</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        The crown jewel of the frontend - a dual-mode interface featuring <strong>Manual Entry</strong> and 
                        <strong className="text-indigo-600"> AI-Assisted Mode</strong>.
                      </p>
                      
                      <div className="bg-white rounded-lg border border-slate-200 p-5 mb-4">
                        <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2 text-slate-600 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span><strong>useReducer State Management:</strong> Handles complex multi-field state with 
                            problemsReducer for predictable updates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span><strong>AI Toggle:</strong> Transforms layout from single column to split-screen grid 
                            when AI mode is activated</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span><strong>handleAiGeneration:</strong> Sends code to <code className="px-1.5 py-0.5 bg-slate-100 rounded">/ai</code> endpoint, 
                            auto-fills all form fields on success</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span><strong>Smart Validation:</strong> Uses <code className="px-1.5 py-0.5 bg-slate-100 rounded">useRef</code> to 
                            programmatically focus invalid fields for better UX</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-xs text-slate-300 font-mono">
{`const [state, dispatch] = useReducer(problemsReducer, initialState);

const handleAiGeneration = async () => {
  const response = await axios.post('/ai', { 
    code: state.code, 
    link: state.link 
  });
  
  // Auto-populate form fields
  dispatch({ type: 'ADD_PROBLEM', payload: response.data.problem });
  dispatch({ type: 'ADD_APPROACH1', payload: response.data.approach });
  dispatch({ type: 'ADD_ALGO', payload: response.data.algorithms });
  // ... more fields
};`}
                        </pre>
                      </div>
                    </div>

                    {/* RevisionProblemPage */}
                    <div className="border-l-4 border-cyan-600 pl-6 py-4 bg-gradient-to-r from-cyan-50 to-transparent">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">RevisionProblemPage - Dashboard</h3>
                      <p className="text-slate-600 mb-4">
                        Main container component with JWT token checking, Redux state hydration, and responsive layout switching.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-white border border-slate-200 rounded p-3">
                          <div className="font-semibold text-slate-900 mb-1">State Management</div>
                          <div className="text-slate-600">useSelector for problems, dispatches getProblems() Thunk</div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded p-3">
                          <div className="font-semibold text-slate-900 mb-1">Filtering Logic</div>
                          <div className="text-slate-600">Client-side filtering via getFilterByDs, getFilterByAlgo</div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded p-3">
                          <div className="font-semibold text-slate-900 mb-1">Responsive Design</div>
                          <div className="text-slate-600">Table (Desktop) vs Card Stack (Mobile) with Tailwind</div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded p-3">
                          <div className="font-semibold text-slate-900 mb-1">Auth Protection</div>
                          <div className="text-slate-600">useNavigate redirect if localStorage token missing</div>
                        </div>
                      </div>
                    </div>

                    {/* CodeViewer */}
                    <div className="border-l-4 border-purple-600 pl-6 py-4 bg-gradient-to-r from-purple-50 to-transparent">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">CodeViewer - Syntax Highlighter</h3>
                      <p className="text-slate-600 mb-4">
                        Wraps <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm">react-syntax-highlighter</code> with 
                        Prettier integration for automatic code formatting.
                      </p>
                      <div className="bg-white border border-slate-200 rounded-lg p-4">
                        <div className="text-sm text-slate-600 space-y-2">
                          <div><strong>Theme:</strong> VS Code Dark (Prism-based)</div>
                          <div><strong>Formatting:</strong> prettier/standalone in useEffect hook</div>
                          <div><strong>Copy Feature:</strong> navigator.clipboard API with visual feedback</div>
                        </div>
                      </div>
                    </div>

                    {/* PublishProblems */}
                    <div className="border-l-4 border-pink-600 pl-6 py-4 bg-gradient-to-r from-pink-50 to-transparent">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">PublishProblems - Sheet Creator</h3>
                      <p className="text-slate-600 mb-4">
                        Modal component for bundling problems into shareable DSA sheets with UUID generation.
                      </p>
                      <div className="bg-white border border-slate-200 rounded-lg p-4">
                        <div className="text-sm text-slate-600 space-y-2">
                          <div><strong>Data Transform:</strong> Maps Redux problems to simplified {`{id, statement, link}`} structure</div>
                          <div><strong>ID Generation:</strong> Uses uuid library for unique sheet identifiers</div>
                          <div><strong>API Call:</strong> Authenticated POST to /publishsheet endpoint</div>
                          <div><strong>UI Pattern:</strong> Modal with backdrop-blur-sm and focus lock</div>
                        </div>
                      </div>
                    </div>

                    {/* RapidProblemCard */}
                    <div className="border-l-4 border-orange-600 pl-6 py-4 bg-gradient-to-r from-orange-50 to-transparent">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">RapidProblemCard - Flashcard Mode</h3>
                      <p className="text-slate-600 mb-4">
                        Interactive flashcard component for rapid revision with direct auth checking.
                      </p>
                      <div className="bg-white border border-slate-200 rounded-lg p-4">
                        <div className="text-sm text-slate-600 space-y-2">
                          <div><strong>Props:</strong> Controlled component with onNextClick, onBackClick callbacks</div>
                          <div><strong>Auth:</strong> Direct useEffect localStorage token check</div>
                          <div><strong>Design:</strong> Card metaphor with Tailwind shadows and gradients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Backend Section */}
            {activeSection === "backend" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                    <FaShieldAlt className="text-indigo-600" />
                    Backend APIs & Infrastructure
                  </h2>

                  <div className="space-y-6">
                    {/* Problems API */}
                    <div className="border-l-4 border-indigo-600 pl-6 py-4 bg-gradient-to-r from-indigo-50 to-transparent">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">problems.route.js - CRUD Operations</h3>
                      <p className="text-slate-600 mb-4">
                        Express.js router with Passport JWT authentication for managing user problems.
                      </p>

                      <div className="space-y-4">
                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <div className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                            <span className="text-green-600">GET</span>
                            <code className="text-sm">/problems</code>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">
                            Fetches all problems for authenticated user using Mongoose populate() for relational joins
                          </p>
                          <div className="bg-slate-900 rounded p-3 text-xs font-mono text-slate-300 overflow-x-auto">
{`router.get('/problems', 
  passport.authenticate('jwt', { session: false }), 
  async (req, res) => {
    const user = await User.findById(req.user._id)
      .populate('problems');
    res.json(user.problems);
  }
);`}
                          </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <div className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                            <span className="text-blue-600">POST</span>
                            <code className="text-sm">/problem</code>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">
                            Creates new problem document and links to user's problem array (atomic operation)
                          </p>
                          <div className="bg-slate-900 rounded p-3 text-xs font-mono text-slate-300 overflow-x-auto">
{`const problem = await Problem.create(req.body);
user.problems.push(problem._id);
await user.save();
res.status(200).json(problem);`}
                          </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <div className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                            <span className="text-red-600">DELETE</span>
                            <code className="text-sm">/problem/:id</code>
                          </div>
                          <p className="text-sm text-slate-600">
                            Removes problem from database and updates user's reference array
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* AI Endpoint */}
                    <div className="border-l-4 border-cyan-600 pl-6 py-4 bg-gradient-to-r from-cyan-50 to-transparent">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <FaRobot className="text-cyan-600" />
                        /ai - AI Code Analysis
                      </h3>
                      <p className="text-slate-600 mb-4">
                        The intelligence engine that powers automated problem analysis using OpenRouter SDK.
                      </p>

                      <div className="bg-white border border-slate-200 rounded-lg p-5 mb-4">
                        <h4 className="font-semibold text-slate-900 mb-3">Request/Response Flow:</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                              1
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">Frontend sends code + link</div>
                              <code className="text-xs text-slate-500">POST /ai {`{ code, link }`}</code>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold">
                              2
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">Backend forwards to OpenRouter with SYSTEM_INSTRUCTION</div>
                              <code className="text-xs text-slate-500">Enforces strict JSON schema output</code>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                              3
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">LLM analyzes code and streams response</div>
                              <code className="text-xs text-slate-500">Extracts: algorithms, complexity, approach</code>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                              4
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">Backend sanitizes and parses JSON</div>
                              <code className="text-xs text-slate-500">Regex removes markdown artifacts</code>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">
                              5
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">Returns structured data to frontend</div>
                              <code className="text-xs text-slate-500">JSON object ready for form population</code>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-lg p-5 overflow-x-auto">
                        <pre className="text-xs text-slate-300 font-mono leading-relaxed">
{`router.post('/ai', async (req, res) => {
  const { code, link } = req.body;
  
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: SYSTEM_INSTRUCTION },
      { role: "user", content: \`Code: \${code}\\nLink: \${link}\` }
    ],
    stream: true
  });

  let fullResponse = '';
  for await (const chunk of completion) {
    fullResponse += chunk.choices[0]?.delta?.content || '';
  }

  // Sanitize and parse
  const cleaned = fullResponse.replace(/\`\`\`json|\\n\`\`\`/g, '').trim();
  const parsed = JSON.parse(cleaned);
  
  res.json(parsed);
});`}
                        </pre>
                      </div>
                    </div>

                    {/* Server Infrastructure */}
                    <div className="border-l-4 border-purple-600 pl-6 py-4 bg-gradient-to-r from-purple-50 to-transparent">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">index.js - Server Infrastructure</h3>
                      <p className="text-slate-600 mb-4">
                        Foundation setup with security, session management, and database connectivity.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <h4 className="font-semibold text-slate-900 mb-2">Session Management</h4>
                          <p className="text-sm text-slate-600 mb-2">
                            Uses express-session + connect-mongo to store sessions in MongoDB for horizontal scalability
                          </p>
                          <code className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded block">
                            MongoStore.create({`{ mongoUrl }`})
                          </code>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <h4 className="font-semibold text-slate-900 mb-2">CORS Security</h4>
                          <p className="text-sm text-slate-600 mb-2">
                            Regex whitelist for process.env.FRONTEND_URL only, blocks unauthorized origins
                          </p>
                          <code className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded block">
                            cors({`{ origin: /vercel.app$/ }`})
                          </code>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <h4 className="font-semibold text-slate-900 mb-2">Database Connection</h4>
                          <p className="text-sm text-slate-600 mb-2">
                            Async ConnectDB() with graceful failure handling (process.exit on error)
                          </p>
                          <code className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded block">
                            mongoose.connect(MONGO_URI)
                          </code>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-4">
                          <h4 className="font-semibold text-slate-900 mb-2">Passport JWT</h4>
                          <p className="text-sm text-slate-600 mb-2">
                            Stateless authentication with JWT strategy, no server-side sessions for API calls
                          </p>
                          <code className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded block">
                            passport.use(JwtStrategy)
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Security Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🔐</div>
                      <div>
                        <div className="font-semibold mb-1">JWT Token Authentication</div>
                        <div className="text-sm text-indigo-100">Stateless, secure tokens with localStorage persistence</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🛡️</div>
                      <div>
                        <div className="font-semibold mb-1">CORS Whitelist</div>
                        <div className="text-sm text-indigo-100">Regex-based origin validation prevents CSRF attacks</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🔒</div>
                      <div>
                        <div className="font-semibold mb-1">API Key Protection</div>
                        <div className="text-sm text-indigo-100">AI keys stored server-side, never exposed to client</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">⚡</div>
                      <div>
                        <div className="font-semibold mb-1">MongoDB Sessions</div>
                        <div className="text-sm text-indigo-100">Distributed session storage for scalable deployments</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-900 py-16 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Dive Deeper?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Explore the codebase, contribute, or start building your own features
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3.5 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/30">
             <a href="https://github.com/Shaiksufiyan157/codemate" target="_blank">View on GitHub</a> 
            </button>
            <button className="px-8 py-3.5 bg-slate-800 border border-slate-700 text-gray-300 rounded-lg font-bold text-lg hover:bg-slate-700 hover:text-white transition-all">
              <a href="https://www.linkedin.com/in/shaik-sufiyan-b31193243/" target="_blank">Contact Developer</a> 
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};