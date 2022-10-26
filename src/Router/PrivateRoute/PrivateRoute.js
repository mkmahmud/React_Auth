import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthUserContext } from '../../UserContext/AuthContext';

const PrivateRoute = ({children}) => {
    
    
    const {UserAuth} = useContext(AuthUserContext);

    const logged = UserAuth.loggedUser;
    console.log(logged.uid)
    
    if(logged.uid){
        return children;
    }

    return <Navigate to='/login'></Navigate>
    
  
};

export default PrivateRoute;