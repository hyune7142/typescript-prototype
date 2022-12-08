import React, { useContext } from 'react';
import { AuthContext } from '@containers/provider/AuthProvider';
import { ConfigContext } from '@containers/provider/ConfigProvider';


const Login = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const { langConfig } = useContext(ConfigContext);

    console.debug('isAuthenticated',isAuthenticated);
    console.debug('langConfig', langConfig);
    return (
        <div>
            Login
        </div>
    );
};

export default Login;