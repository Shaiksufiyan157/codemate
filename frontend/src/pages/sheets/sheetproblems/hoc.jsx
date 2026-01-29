import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import axios from "axios";
import { useSelector } from "react-redux";
export const HOCSheetsProblems = (Component) => {

    return function UpdatedComponent() {
        let navigate = useNavigate()
        const didRun = useRef(false);
        useEffect(() => {
            if (didRun.current) return;
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error("Please login to continue")
                navigate('/login');
                return;
            }
        })
        return <Component />
    }
}
