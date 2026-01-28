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

    if (!token) return null;

    return <WrappedComponent/>;
  };
};

export default withAuth;