import Login from "../../components/auth/login";
import SignUp from "../../components/auth/register";

const LoginPage = () => {
    return (
        <>
            <Login />
        </>
    );
}
const SignUpPage=()=>{
    return(
        <>
        <SignUp/>
        </>
    )
}
export {LoginPage,SignUpPage}