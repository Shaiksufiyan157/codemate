import { Problems } from './components/content-table'
import Navbar from './components/navbar/index2'
import { Footer } from './components/footer/index'
import {Route,Routes} from 'react-router-dom'
import LandingPage from './pages/home'
import { ProblemsTable } from './components/dsasheetComps/content-table/problemstable'
import { InputData } from './components/probleminput/index'
import DsaSheetsPage from './pages/sheets/index'
import { SheetProblemCard } from './components/dsasheetComps/content-table/problemcard'
function App() {

  return (
    <>
      <Navbar/>
  <div className="bg-gray-100 min-h-screen flex flex-col justify-between">


  <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/problems' element={<Problems/>}></Route>
    <Route path='/addproblem' element={<InputData/>}></Route>
    <Route path='/sheets' element={<DsaSheetsPage/>}></Route>
    <Route path='/sheets/:id' element={<ProblemsTable/>}></Route>
    <Route path='/sheetproblem' element={<SheetProblemCard/>}></Route>
  </Routes>
  
   <Footer/>
  </div>
 
    </>
  )
}

export default App
