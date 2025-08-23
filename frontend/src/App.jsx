import { Problems } from './components/content-table'
import Navbar from './components/navbar/index2'
import { Footer } from './components/footer/index'
import {Route,Routes, useLocation} from 'react-router-dom'
import LandingPage from './pages/home'
import { InputData } from './components/probleminput/index'
import DsaSheetsPage from './pages/sheets/index'
import { SheetProblemsPage } from './pages/sheets/sheetproblems'



function App() {
  const { pathname } = useLocation();
  const showNavbar = pathname !== "/";
  return (
    <>

  <div className="bg-gray-100 h-screen flex flex-col justify-between">
      
 {showNavbar && <Navbar />}
  <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/problems' element={<Problems/>}></Route>
    <Route path='/addproblem' element={<InputData/>}></Route>
    <Route path='/sheets' element={<DsaSheetsPage/>}></Route>
    <Route path='/sheets/:id' element={<SheetProblemsPage/>}></Route>
  </Routes>
  
   <Footer/>
  </div>
 
    </>
  )
}

export default App
