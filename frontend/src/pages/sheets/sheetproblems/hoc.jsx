import { useEffect ,useRef} from "react"
import { useNavigate } from "react-router-dom"; 
import toast from 'react-hot-toast'
import axios from "axios";
export const HOCSheetsProblems = (Component) => {

  return function UpdatedComponent() {
            let navigate = useNavigate()
            const didRun = useRef(false);
        useEffect(() => {
            if (didRun.current) return;
        const token = localStorage.getItem('token');
            if (!token) {
        toast.error("Please login to and continue")
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
