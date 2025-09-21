import { useEffect ,useRef} from "react"
import { useNavigate } from "react-router-dom"; 
import toast from 'react-hot-toast'
import axios from "axios";
import { useSelector } from "react-redux";
export const HOCSheetsProblems = (Component) => {

  return function UpdatedComponent() {
            let navigate = useNavigate()
            const didRun = useRef(false);
            const { token} = useSelector(state => state.problem)
        useEffect(() => {
            if (didRun.current) return;
        const token = localStorage.getItem('token');
            if (!token) {
        toast.error("Please login to continue")
        navigate('/login');
        // alert("Please login to continue")
            
        return;
    }
        axios.get("http://localhost:3000/sheets", {
            headers: {
                Authorization: token,
            }
        }).then(res => {
            console.log(res)
        })
    }, [])
    return <Component />
  }
}
