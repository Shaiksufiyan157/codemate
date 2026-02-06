import Navbar from './components/navbar/index'
import { Footer } from './components/footer/index'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LandingPage from './pages/home'
import { InputData } from './components/probleminput/index'
import DsaSheetsPage from './pages/sheets/sheetlist/index'
import SheetProblemsPage from './pages/sheets/sheetproblems/index'
import axios from "axios"
import { RevisionProblemPage } from './pages/revisionProblems'
import { RapidFire } from './pages/rapidfire/index'
import { LoginPage, SignUpPage } from './pages/auth/Loginpage'
import { useDispatch } from 'react-redux'
import { setUserInfo } from './slices/userSlice'
import ProtectedRoute from './components/utils/ProtectedRoute'
import {useEffect } from 'react'
import toast,{ Toaster } from 'react-hot-toast';
import { DocsComponent } from './components/docs'


function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const fetchUserData = async () => {
      try {

        const token = localStorage.getItem('token');

        if (token) {
         const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/me`, {
          headers: {

            Authorization: token
          }
        });

        dispatch(setUserInfo(response.data.user));
        }

        

      } catch (err) { 
        toast.error("somethng went wrong")

        if (err.response && err.response.status === 401) {
          navigate('/');
        }
      }
    };

    fetchUserData();
  }, [navigate]);
  return (
    <>

      <div className="h-screen flex flex-col">
        <Navbar />
        <Toaster/>
        <div className="bg-gray-100 flex-grow flex flex-col justify-between">
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/sheets' element={<DsaSheetsPage />} />
            <Route path='/howitworks?' element={<DocsComponent/>}/>
            {/* PROTECTED ROUTES - Only accessible if logged in */}
            <Route element={<ProtectedRoute />}>
              <Route path='/problems' element={<RevisionProblemPage />} />
              <Route path='/addproblem' element={<InputData />} />
              <Route path='/sheets/:sid' element={<SheetProblemsPage />} />
              <Route path='/rapidfire' element={<RapidFire />} />
            
            </Route>

          </Routes>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
