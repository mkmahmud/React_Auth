import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthUserContext } from '../../UserContext/AuthContext';

const PrivateRoute = ({children}) => {
    
    
    const {UserAuth} = useContext(AuthUserContext);
    const location = useLocation();

     
    if(UserAuth.loading  ){
        return <button type="button" class="bg-indigo-500 ..." disabled>Processing... </button>
    }

    console.log(location)

    const logged = UserAuth.loggedUser;
    // console.log(logged.uid)
    
    if(!logged){
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }

    return children;
};

export default PrivateRoute;