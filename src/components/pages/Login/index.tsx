import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '@containers/provider/AuthProvider';
import Login from '@components/pages/Login/Login';

const LoginPage: React.FunctionComponent = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated])

    return (
        <div id="login-page">
            <Login />
        </div>
    );
};

export default LoginPage;