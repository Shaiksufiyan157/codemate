import { useState } from "react"
import { useNavigate,NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useRef } from "react";
import { use } from "react";
const SignUp=()=>{
    const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState();

const navigate=useNavigate()
const [errors, setErrors] = useState({email:"",password:"",username:""});
const emailRef=useRef()
const usernameRef=useRef();
const passwordRef=useRef();

const validate = () => {
    let tempErrors = {};
    let isValid=true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(username.length==0){
        // tempErrors.username = "Username is required";
        isValid=false
         setErrors({email:"",username:"Username is required",password:""});
         usernameRef.current?.focus()
        //  return Object.keys(tempErrors).length === 0; 
    }
    else if (username.trim().length<6) {
         isValid=false
         setErrors({email:"",username:"Username should contain atleast 6 characters",password:""});
         usernameRef.current?.focus()
        // tempErrors.username = "Username should contain atleast 6 characters";
    }
    else if(email.length==0){
        // tempErrors.email = "Email is required";
        isValid=false
         setErrors({email:"Email is required",username:"",password:""});
         emailRef.current?.focus()
        //  setErrors(tempErrors);
        // return Object.keys(tempErrors).length === 0; 
    }
    
    else if (!emailRegex.test(email)) {
        // tempErrors.email = "Invalid email format";
        isValid=false
         setErrors({email:"Invalid email format",username:"",password:""});
         emailRef.current?.focus()
    }
    else if(password.length==0){
        // tempErrors.password = "Password is required";
        isValid=false
          setErrors({email:"",username:"",password:"Password is required"});
          passwordRef.current?.focus()
        //  setErrors(tempErrors);
        
    }
    else if (password.length <6) {
        // tempErrors.password = "Password must be at least 6 characters";
          isValid=false
           setErrors({email:"",username:"",password:"Password must be at least 6 characters"});
            passwordRef.current?.focus()
    }

    
    // Username check
  

    // Email check using Regex
  

    // Password check (Min 6 characters)
    
    // setErrors(tempErrors);
    if(isValid){
    setErrors({email:"",password:"",username:""})
    }
    return isValid; // Returns true if no errors
};
      const handleSignupClick=async()=>{
        if(validate()){

        console.log(username,email,password)
    
    }
        // const user=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`,{username,email,password})
        // localStorage.setItem('token',user.data.token)
        // dispatch(setToken(user.data.token))
        // toast.success('Account Created Successfully')
        // navigate('/')

      }
    return(
        <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4">
  <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg border border-gray-100">
    <h1 className="mb-2 text-2xl font-bold text-gray-800 text-center">
      Create Account
    </h1>
    <p className="mb-6 text-center text-sm text-gray-500">
      Start tracking your progress on <span className="text-blue-600 font-semibold">CodeMate</span>
    </p>
    
    <div className="space-y-4">
      {/* Username */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
        <input
        minLength={6}
          type="text"
          ref={usernameRef}
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          placeholder="username"
        />
         {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          ref={emailRef}
          onChange={e => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          placeholder="email@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          ref={passwordRef}
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          placeholder="••••••••"
        />
           {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>

      {/* Submit Button */}
      <div
        onClick={handleSignupClick}
        className="w-full mt-4 rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98] cursor-pointer shadow-md select-none"
      >
        Create Account
      </div>

      <p className="mt-4 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <span 
          className="text-blue-600 cursor-pointer hover:underline" 
        >
            <NavLink to={'/login'}>Login</NavLink> 
        </span>
      </p>
    </div>
  </div>
</div>
    )
}
export default SignUp;