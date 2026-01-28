import { useState, useEffect } from "react";
import { findUser } from "../../api/user";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useRef } from "react"
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../slices/userSlice";
import { setToken } from "../../slices/problemSlice";
export const Login = () => {
  useEffect(()=>{
    const token=localStorage.getItem("token")
    if(token){
      navigate('/')
    }
  })
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", username: "" });


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef()

  const passwordRef = useRef();
  const handleGuestLogin = async () => {
    try {
      const guestemail = "guest@codemate.com"
      const guestpassword = "123456"
      const user = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, { email: guestemail, password: guestpassword })

      localStorage.setItem('token', user.data.token)
      dispatch(setToken(user.data.token))
      dispatch(setUserInfo(user.data.user))

      toast.success(` Logged in successfully as ${user.data.user.username}`)
      navigate('/')

    }

    catch (err) {
      console.log("error is comming from", err);
      toast.error("Login failed")
    }
  }
  const validate = () => {

    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length == 0) {
      isValid = false
      setErrors({ email: "Email is required", username: "", password: "" });
      emailRef.current?.focus()

    }
    else if (!emailRegex.test(email)) {
      isValid = false
      setErrors({ email: "Invalid email format", username: "", password: "" });
      emailRef.current?.focus()
    }
    else if (password.length == 0) {
      isValid = false
      setErrors({ email: "", username: "", password: "Password is required" });
      passwordRef.current?.focus()

    }

    if (isValid) {
      setErrors({ email: "", password: "", username: "" })
    }
    return isValid; 
  };
  const handleLoginClick = async () => {
   

    if (validate()) {
      try {

        const user = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, { email, password })

        localStorage.setItem('token', user.data.token)
        dispatch(setToken(user.data.token))
        dispatch(setUserInfo(user.data.user))
        toast.success(` Logged in successfully as ${user.data.user.username}`)
        navigate('/')

      }

      catch (err) {
        const { message } = err.response.data
        setEmail("")
        setPassword("")
        toast.error(message)
      }
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
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
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
          <p className="mt-4 text-center text-sm text-gray-500">
            Login as Guest {" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
            >

              <NavLink onClick={handleGuestLogin}>Login</NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
