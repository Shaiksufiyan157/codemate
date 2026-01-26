import { Problems } from './components/content-table'
import Navbar from './components/navbar/index2'
import { Footer } from './components/footer/index'
import {Route,Routes, useLocation,useNavigate} from 'react-router-dom'
import LandingPage from './pages/home'
import { InputData } from './components/probleminput/index'
import DsaSheetsPage from './pages/sheets/index'
import SheetProblemsPage  from './pages/sheets/sheetproblems'
import axios from "axios"
import  {RevisionProblemPage}  from './pages/revisionProblems'
import { RapidFire } from './pages/rapidfire/index'
import { LoginPage,SignUpPage } from './pages/auth/Loginpage'
import { useDispatch } from 'react-redux'
import CodemateAi from './components/genAi'
import { setUserInfo } from './slices/userSlice'
import ProtectedRoute from './components/utils/ProtectedRoute'
import { use, useEffect } from 'react'



function App() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
useEffect(() => {
        const fetchUserData = async () => {
            try {
  
                const token = localStorage.getItem('token'); 

                if (!token) {
                    navigate('/login'); // Redirect if not logged in
                    return;
                }

                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/me`, {
                    headers: {
 
                        Authorization: token 
                    }
                });

                dispatch(setUserInfo(response.data.user));

            } catch (err) {
                console.error("Error fetching user:", err);

                if (err.response && err.response.status === 401) {
                    navigate('/login');
                }
            }
        };

        fetchUserData();
    }, [navigate]);
  return (
    <>

<div className="h-screen flex flex-col">
  <Navbar />
  <div className="bg-gray-100 flex-grow flex flex-col justify-between">
    <Routes>
          {/* PUBLIC ROUTES */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
            <Route path='/sheets' element={<DsaSheetsPage />} />
              <Route path='/ai' element={<CodemateAi />} />
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
