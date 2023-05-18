import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouts = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <progress className="progress w-full"></progress>
    }

    else if(user){
        return children
    }
    return <Navigate state={location} to='/login' replace></Navigate>
};

export default PrivateRouts;