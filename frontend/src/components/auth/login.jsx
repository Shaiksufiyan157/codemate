import { useState ,useEffect} from "react";
import { findUser } from "../../api/user";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setToken } from "../../slices/problemSlice";
import { getProblems } from "../../api/revproblems";
export const Login=() =>{


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();
  const dispatch=useDispatch();
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
  const handleLoginClick = async() => {
        // console.log(email, password);
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, { email, password }).then(user => {
            console.log(user);
            localStorage.setItem('token', user.data.token)
            dispatch(setToken(user.data.token))
            toast.success("Logged in successfully")
            navigate('/')
        })
        .catch(err => {
            console.log("error is comming from",err);
            toast.error("Login failed")
        })
        console.log("Login clicked"); 
  };
 
  return (
    <>
    <div style={{ maxWidth: 300, margin: "auto", padding: 20, border: "1px solid #ccc" }}>
      <h1>Login to your CodeMate Account</h1>
      <div style={{ marginBottom: 10 }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", padding: 5, marginTop: 5 }}
          placeholder="Enter email"
          name="email"
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", padding: 5, marginTop: 5 }}
          placeholder="Enter password"
          name="password"
        />
      </div>
      <div
        onClick={handleLoginClick}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: 10,
          textAlign: "center",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        Login
      </div>
    </div></>
  );
}

export default Login;
