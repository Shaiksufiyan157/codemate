<div align="center">

# CODEMATE

### _Empowering Innovation Through Seamless Coding Mastery_

![Last Commit](https://img.shields.io/github/last-commit/Shaiksufiyan157/codemate?style=flat&color=blue&label=last%20commit)
![Top Language](https://img.shields.io/github/languages/top/Shaiksufiyan157/codemate?style=flat&color=blue)
![Language Count](https://img.shields.io/github/languages/count/Shaiksufiyan157/codemate?style=flat&color=blue)

<br/>
<br/>

### _Built with the tools and technologies:_

![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=flat&logo=json&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=flat&logo=markdown&logoColor=white)
![Session](https://img.shields.io/badge/Session-000000?style=flat&logo=socket.io&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white)
![ENV](https://img.shields.io/badge/.ENV-ECD53F?style=flat&logo=dotenv&logoColor=black)

<br/>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=nodemon&logoColor=white)
![Passport](https://img.shields.io/badge/Passport-34E27A?style=flat&logo=passport&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)

</div>

> **CodeMate** is a robust full-stack web application engineered to streamline the Data Structures and Algorithms (DSA) learning journey. By combining structured problem sheets with advanced tracking capabilities, it helps developers move from learning concepts to mastering technical interviews.

---

## 🎯 Key Features & Functionality

### 🔐 Secure & Seamless Authentication
- **Enterprise-Grade Security:** Implements **Passport.js** with **JWT (JSON Web Tokens)** strategies to ensure secure user data handling.
- **Persistent Sessions:** Utilizes `express-session` with MongoDB storage to maintain user login states across browser restarts, providing a seamless "remember me" experience.
- **Protected Routes:** Middleware safeguards sensitive pages (like user profiles and progress data), ensuring only authenticated users can access them.

### 📚 Structured DSA Sheet Management
- **Topic-Wise Organization:** Problems are meticulously categorized into core topics (e.g., *Arrays, Linked Lists, Recursion, Dynamic Programming*), allowing users to focus on weak areas.
- **Curated Content:** Supports integration of popular DSA sheets (like Love Babbar 450 or Striver’s SDE Sheet), giving users a clear roadmap from beginner to advanced levels.
- **Progress Visualization:** Visual indicators show completion rates per topic, motivating users to maintain their streak.

### 📝 Smart Problem Tracking & Notes
- **Personalized Status Workflow:** Users can mark problems with distinct statuses: *Solved*, *Pending*, or *Revise Later*.
- **Contextual Note-Taking:** Includes a dedicated notes section for every problem, allowing users to jot down intuition, edge cases, or time complexity analysis ($O(n)$) directly alongside the question.
- **Bookmark for Review:** Easily "star" tricky problems to add them to a priority queue for last-minute interview prep.

### 💾 Comprehensive Solution Repository
- **Multi-Approach Storage:** Users aren't limited to one answer; the system allows saving multiple solutions (e.g., *Brute Force* vs. *Optimized Approach*) for the same problem.
- **Code formatting:** Clean and readable display of code snippets, making it easy to review syntax and logic patterns months later.

### 🔄 Dedicated Revision Mode
- **Spaced Repetition Friendly:** A specialized "Revision" interface that filters only the problems marked for review, stripping away distractions to focus purely on retention.
- **Quick-Look Cards:** View problem statements and your saved notes side-by-side to quickly refresh concepts without re-solving the entire problem.

### 🎨 Responsive & Modern UI
- **Mobile-First Design:** Built with **Tailwind CSS** to ensure the dashboard looks perfect on mobile devices, tablets, and desktops.
- **Interactive Elements:** Smooth transitions and instant feedback (using Redux state management) when updating problem status, eliminating page reloads for a native app feel.

---

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js (REST API Architecture)
- **Database:** MongoDB (Schema modeling with Mongoose)
- **Authentication:** Passport.js (JWT & Local Strategies)
- **State Persistence:** express-session & connect-mongo

### Frontend
- **Framework:** React.js (Powered by Vite for fast builds)
- **Styling:** Tailwind CSS (Utility-first design)
- **State Management:** Redux Toolkit (Centralized data store)
- **API Communication:** Axios (Interceptor-based HTTP requests)
- **Routing:** React Router DOM v6

### Deployment
- **Hosting:** Vercel (Optimized for frontend/backend monorepos)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn package manager
- MongoDB (Local instance or MongoDB Atlas URL)
- Git

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone [https://github.com/Shaiksufiyan157/codemate.git](https://github.com/Shaiksufiyan157/codemate.git)
cd codemate
npm install
PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
# Run in development mode (with Nodemon)
npm run dev
```
<div align="center"> <sub>Built with ❤️ by Shaik Sufiyan. Open for contributions!</sub> </div>
