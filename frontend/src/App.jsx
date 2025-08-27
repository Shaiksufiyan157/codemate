import { Problems } from './components/content-table'
import Navbar from './components/navbar/index2'
import { Footer } from './components/footer/index'
import {Route,Routes, useLocation} from 'react-router-dom'
import LandingPage from './pages/home'
import { InputData } from './components/probleminput/index'
import {DsaSheetsPage} from './pages/sheets/index'
import { SheetProblemsPage } from './pages/sheets/sheetproblems'
import axios from "axios"
import { useSelector } from 'react-redux'


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
 <Navbar />
  <div className="bg-gray-100 h-screen flex flex-col justify-between">
      

  <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/problems' element={<Problems/>}></Route>
    <Route path='/addproblem' element={<InputData/>}></Route>
    <Route path='/sheets' element={<DsaSheetsPage/>}></Route>
    <Route path='/sheets/:sid' element={<SheetProblemsPage/>}></Route>
  </Routes>
   <Footer className="flex-"/>
  </div>
   

    </>
  )
}

export default App
