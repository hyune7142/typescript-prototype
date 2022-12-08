import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from '@containers/provider/AuthProvider';
import { LoginPage } from '@components/pages';

const Routers = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated])

    return (
            <Routes>
                <Route path="/" element={<div>Login Success</div>} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
    );
};

const RootRouter = () => {
    return (
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    );
};

export default RootRouter;