import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    
    if(loading){
        return <span className="loading loading-bars loading-md  mt-56 ml-64  text-center text-blue-600"></span>
    }
    
    if(user){
        return children
    }
    return <Navigate to='/signIn' state={{from:location}} replace  ></Navigate>
};

export default PrivateRoute;