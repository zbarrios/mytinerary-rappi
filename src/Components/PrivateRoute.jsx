import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {

    const token = useSelector(state=>state.authStore.token);
    if(!token)
        return <Navigate to="/sign-in" replace></Navigate>
    return children
}


export default PrivateRoute;
