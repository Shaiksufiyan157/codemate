import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Problems } from './components/content-table'
import Navbar from './components/navbar/index2'
import { InputData } from './components/probleminput/index'
import {Route,Routes} from 'react-router-dom'
import LandingPage from './pages/home'
function App() {

  return (
    <>
  <Navbar/>

  <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/problems' element={<Problems/>}></Route>
    <Route path='/addproblem' element={<InputData/>}></Route>
  </Routes>
  
    </>
  )
}

export default App
