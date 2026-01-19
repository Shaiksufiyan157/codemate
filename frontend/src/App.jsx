import { Problems } from './components/content-table'
import Navbar from './components/navbar/index2'
import { Footer } from './components/footer/index'
import {Route,Routes, useLocation} from 'react-router-dom'
import LandingPage from './pages/home'
import { InputData } from './components/probleminput/index'
import DsaSheetsPage from './pages/sheets/index'
import SheetProblemsPage  from './pages/sheets/sheetproblems'
import axios from "axios"
import { RevisionProblemPage } from './pages/revisionProblems'
import { RapidFire } from './pages/rapidfire/index'
import { LoginPage,SignUpPage } from './pages/auth/Loginpage'
// import {Sign}
console.log(import.meta.env.VITE_BACKEND_URL);
async function fetchData() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/sheets`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


// fetchData();

function App() {

  return (
    <>

<div className="h-screen flex flex-col">
  <Navbar />
  <div className="bg-gray-100 flex-grow flex flex-col justify-between">
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/problems' element={<RevisionProblemPage />} />
      <Route path='/addproblem' element={<InputData />} />
      <Route path='/sheets' element={<DsaSheetsPage />} />
      <Route path='/sheets/:sid' element={<SheetProblemsPage />} />
      <Route path='/rapidfire' element={<RapidFire />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element ={<SignUpPage/>}/>
    </Routes>
    <Footer />
  </div>
</div>

    </>
  )
}

export default App
