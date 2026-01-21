import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const withAuth = (WrappedComponent) => {
  return () => {
    const { token } = useSelector((state) => state.problem);
    const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        navigate("/login");
      }
    }, [token, navigate]);

    // If no token, don't render anything while redirecting
    if (!token) return null;

    // If token exists, render the original component
    return <WrappedComponent/>;
  };
};

export default withAuth;