import { useState, useEffect } from "react";
import { findUser } from "../../api/user";
import { useNavigate,NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setToken } from "../../slices/problemSlice";
import { getProblems } from "../../api/revproblems";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();
  const dispatch = useDispatch();
  //  useEffect(() => {
  //     const token = localStorage.getItem('token');
  //     axios.get("http://localhost:3000/protected", {
  //         headers: {
  //             Authorization: token,
  //         }
  //     }).then(res => {
  //         console.log(res)
  //         navigate('/')
  //     }).catch(err => {
  //         console.log("error is comming from",err);
  //         navigate('/login')
  //     })
  // }, [])
  const handleLoginClick = async () => {
    // console.log(email, password);
    try {
      const user = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, { email, password })
        // console.log(user);
        localStorage.setItem('token', user.data.token)
        dispatch(setToken(user.data.token))
        toast.success("Logged in successfully")
        navigate('/')
      
    }

    catch (err) {
      console.log("error is comming from", err);
      toast.error("Login failed")
    }

  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg border border-gray-100">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 text-center">
          Login to <span className="text-blue-600">CodeMate</span>
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Enter password"
            />
          </div>

          <button
            onClick={handleLoginClick}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:transform active:scale-[0.98] shadow-md"
          >
            Login
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            Don't have an account? <span className="text-blue-600 cursor-pointer hover:underline"><NavLink to={'/signup'}>Signup</NavLink></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
