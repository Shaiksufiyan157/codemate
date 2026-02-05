<div align="center">

# 🚀 CODEMATE

### <i>Empowering Innovation Through Seamless Coding Mastery</i>

![Last Commit](https://img.shields.io/badge/last%20commit-yesterday-007ec6?style=flat-square)
![JavaScript](https://img.shields.io/badge/javascript-99.8%25-007ec6?style=flat-square)
![Languages](https://img.shields.io/badge/languages-3-007ec6?style=flat-square)

<br/>

### <i>Built with modern, scalable technologies</i>

<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/Passport-34E27A?style=for-the-badge&logo=passport&logoColor=white" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
<img src="https://img.shields.io/badge/OpenRouter-000000?style=for-the-badge&logo=ai&logoColor=white" />

</div>

---

## 📌 About Codemate

**Codemate** is an AI-powered DSA tracking and revision platform designed for developers who want to **log problems faster**, **revise smarter**, and **stay consistent** without the usual manual overhead.

Unlike traditional DSA trackers, Codemate integrates **Generative AI directly into the workflow**, allowing users to convert raw code into a complete, structured problem entry in seconds.

---

## 🤖 AI-Powered Automation (Core Highlight)

Codemate’s standout feature is its **GenAI Engine**, built to eliminate the most painful part of DSA tracking — **manual documentation**.

### 🔥 What Makes the AI Feature Special?

You don’t write explanations.  
You don’t tag problems manually.  
You don’t calculate complexities.

👉 **You just paste your code and problem link.**

The AI does everything else.

---

### 🧠 AI Workflow

1. **Input**
   - Raw solution code (C / C++ / Java / Python / JavaScript)
   - Problem URL (LeetCode, GFG, Codeforces, etc.)

2. **Processing**
   - Backend streams data to **OpenRouter**
   - Uses **Nvidia Nemotron-3** LLM for structured extraction

3. **Strict Validation Layer**
   - **Category A:** Valid code snippets
   - **Category B:** Valid problem links
   - **Category C:** Invalid / gibberish input  
   (Rejected instantly to maintain data integrity)

4. **AI-Generated Metadata**
   - 📌 Problem Title (inferred from logic or link)
   - 🧠 Approach Summary (concise & interview-ready)
   - ⏱️ Time Complexity
   - 💾 Space Complexity
   - 🏷️ Data Structures & Algorithms tags

> **System Rule:**  
> *"Your ONLY job is to validate input and extract metadata."*

This makes Codemate **fast, accurate, and distraction-free**.

---

## ✨ Key Features

### ⚡ Smart Problem Entry
- Add problems manually **or**
- Use **AI Assistant** to auto-generate everything from raw code

### 📚 DSA Sheets
- Create personal sheets (e.g., *Blind 75*, *Top 100*)
- Publish sheets for community access
- Explore and follow other users’ sheets

### 🔥 Rapid Fire Mode
- Flashcard-style revision
- Tests problem logic **without showing the code first**
- Perfect for last-minute interview prep

### 🔍 Advanced Filtering
- Filter by:
  - Data Structures (Array, Stack, Graph, Heap)
  - Algorithms (Binary Search, DFS, BFS, Sorting)

### 💻 Code Solution Viewer
- Syntax highlighting using **PrismJS**
- VS Code Dark theme
- One-click **Copy to Clipboard**

### 🔐 Secure Authentication
- JWT-based authentication
- Passport.js strategies
- Secure session handling

---

## 🧱 Tech Stack

**Frontend**
- React (Vite)
- Redux Toolkit
- Axios
- ESLint

**Backend**
- Node.js
- Express.js
- MongoDB & Mongoose
- Passport.js
- JWT Authentication

**AI**
- OpenRouter API
- Nvidia Nemotron-3 LLM

---

## 📂 Project Structure

```bash
codemate/
├── backend/
│   ├── src/
│   │   ├── config/         # Passport authentication config
│   │   ├── lib/            # Database connection
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # Auth, AI, Problems, Sheets APIs
│   └── ...
│
└── frontend/
    ├── src/
    │   ├── api/            # Axios services
    │   ├── components/     # Reusable UI components
    │   ├── pages/          # App pages
    │   ├── slices/         # Redux state
    │   └── ...
```
⚙️ Installation & Setup
Prerequisites

Node.js v18+

MongoDB (Local or Atlas)

OpenRouter API Key

1️⃣ Clone Repository
```bash
git clone https://github.com/Shaiksufiyan157/codemate.git
cd codemate
```

2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create .env file:
```bash
PORT=3000
DB_URI=mongodb://localhost:27017/codemate
FRONTEND_URL=http://localhost:5173
OPENROUTER_API_KEY=your_openrouter_key_here

```
Start backend:
```bash
npm run dev
```
3️⃣ Frontend Setup
```bash
cd frontend
npm install
```

Create .env file:
```bash
VITE_BACKEND_URL=http://localhost:3000
```

Start frontend:
```bash
npm run dev
```
🧠 Why Codemate?

✔️ Zero-friction DSA logging
✔️ AI-first developer experience
✔️ Built for interview preparation
✔️ Designed by a developer, for developers

<p align="center"> Developed with ❤️ by <a href="https://github.com/Shaiksufiyan157">Shaik Sufiyan</a> </p>
