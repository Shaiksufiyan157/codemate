<div align="center">

# CODEMATE

### <i>Empowering Innovation Through Seamless Coding Mastery</i>

![Last Commit](https://img.shields.io/badge/last%20commit-yesterday-007ec6?style=flat-square)
![JavaScript](https://img.shields.io/badge/javascript-99.8%25-007ec6?style=flat-square)
![Languages](https://img.shields.io/badge/languages-3-007ec6?style=flat-square)

<br>

### <i>Built with the tools and technologies:</i>

<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/Session-000000?style=for-the-badge&logo=ghost&logoColor=white" alt="Session" />

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
<img src="https://img.shields.io/badge/.ENV-F7DF1E?style=for-the-badge&logo=dotenv&logoColor=black" alt="ENV" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />

<img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" alt="Nodemon" />
<img src="https://img.shields.io/badge/Passport-34E27A?style=for-the-badge&logo=passport&logoColor=white" alt="Passport" />
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />

</div>

---

## 🤖 AI-Powered Automation (Core Feature)

Codemate distinguishes itself by integrating **GenAI** directly into the developer's workflow. It leverages advanced Large Language Models (LLMs) to eliminate the manual friction of logging DSA problems.

### **How the AI Engine Works**
Instead of manually typing out problem statements, time complexities, and tags, users can simply paste their **Raw Code** and the **Problem Link**. The AI Engine processes this input to auto-generate the entire entry.

**The Workflow:**
1.  **Input:** User provides a raw code snippet (Java/C++/Python/JS) and a URL.
2.  [cite_start]**Processing:** The backend streams this data via **OpenRouter** to the **Nvidia Nemotron-3** model[cite: 35, 46].
3.  **Strict Validation:** The system uses a specific system instruction set to classify input into three categories:
    * [cite_start]**Category A:** Valid Code Snippets[cite: 38].
    * [cite_start]**Category B:** Valid Problem Links[cite: 40].
    * [cite_start]**Category C:** Gibberish/Invalid Data[cite: 42].
4.  **Extraction:** The AI automatically extracts and formats:
    * Problem Title (inferred from logic or link).
    * Approach Summary (Concise explanation).
    * Time & Space Complexity.
    * [cite_start]Data Structure & Algorithm Tags (e.g., "Array", "Binary Search")[cite: 45].

> [cite_start]**"Your ONLY job is to validate input and extract metadata."** — *System Instruction to LLM* [cite: 37]

---

## ✨ Key Features

* [cite_start]**⚡ Smart Problem Entry:** Add problems manually or use the **AI Assistant** to auto-fill details from your code[cite: 334].
* [cite_start]**📚 DSA Sheets:** Create, manage, and publish your own DSA sheets (like "Blind 75") or explore community sheets[cite: 165, 474].
* [cite_start]**🔥 Rapid Fire Mode:** A flashcard-style revision system to quickly test your memory on problem logic without seeing the code immediately[cite: 424].
* [cite_start]**🔍 Advanced Filtering:** Filter your problem repository by specific Data Structures (Arrays, Heaps, Graphs) or Algorithms (DFS, BFS, Sorting)[cite: 247, 253].
* [cite_start]**💻 Code Solution Viewer:** Built-in syntax highlighting (PrismJS) with a "Copy to Clipboard" feature and VS Code Dark theme[cite: 140, 150].
* [cite_start]**🔐 Secure Authentication:** Full user registration and login system using **JWT** and **Passport.js** strategies[cite: 26, 61].

---

## 📂 Project Structure

```bash
codemate/
├── backend/                # Express & MongoDB Server
│   ├── src/
│   │   ├── config/         # Passport Auth Config
│   │   ├── lib/            # DB Connection
│   │   ├── models/         # Mongoose Schemas (User, Problem, Sheet)
│   │   └── routes/         # API Routes (Auth, LLM, Problems)
│   └── ...
└── frontend/               # React (Vite) Application
    ├── src/
    │   ├── api/            # Axios endpoints
    │   ├── components/     # Reusable UI (Navbar, Cards, Filter)
    │   ├── pages/          # Full Page Views (Home, Sheets, Auth)
    │   ├── slices/         # Redux State Management
    │   └── ...
⚡ Installation & Setup
Prerequisites
Node.js (v18+)

MongoDB (Local or Atlas)

OpenRouter API Key (for AI features)

1. Clone the Repository
Bash
git clone [https://github.com/Shaiksufiyan157/codemate.git](https://github.com/Shaiksufiyan157/codemate.git)
cd codemate
2. Backend Setup
Bash
cd backend
npm install

# Create a .env file in the backend folder
echo "PORT=3000" >> .env
echo "DB_URI=mongodb://localhost:27017/codemate" >> .env
echo "FRONTEND_URL=http://localhost:5173" >> .env
echo "OPENROUTER_API_KEY=your_openrouter_key_here" >> .env

# Start the server
npm run dev
3. Frontend Setup
Bash
cd frontend
npm install

# Create a .env file in the frontend folder
echo "VITE_BACKEND_URL=http://localhost:3000" >> .env

# Start the client
npm run dev
<p align="center"> Developed by <a href="https://www.google.com/search?q=https://github.com/Shaiksufiyan157">Shaik Sufiyan</a> </p>
