import React, { useReducer, createContext } from 'react';
import { AuthStateType, AuthContextType, AuthContextActionType } from '@@types/provider';

const defaultValue: AuthStateType = {
    isAuthenticated: false,
    user: {},
    token: {},
    otpToken: '',
}

const authContextReducer = (state: AuthStateType, action: AuthContextActionType): AuthStateType => {
    switch(action.type) {
        case 'SESSION_REFRESH':
            const nextState = {
                isAuthenticated: sessionStorage.getItem('isAuthenticated') === 'true',
                user: JSON.parse(sessionStorage.getItem('userInfo') ?? '{}'),
                token: JSON.parse(sessionStorage.getItem('token') ?? '{}'),
                otpToken: sessionStorage.getItem('otp_token') ?? ''
            }
            return nextState;
        case 'LOGIN_PROCESS':
            return state;
        case 'LOGOUT_PROCESS':
            return state;
        default:
            return state;
    }
};

const AuthContext = createContext<AuthContextType>({
    ...defaultValue,
    refresh: () => {},
	login: async (userId: string, password: string) => {},
	logout: (text: string) => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authContextReducer, defaultValue);

    const handleRefresh = () => {
        dispatch({ type: 'SESSION_REFRESH' })
    }

    const handleLogin = async (userId: string, password: string) => {
        sessionStorage.clear();
        sessionStorage.setItem('user', JSON.stringify(userId));

        // something Logic....
    }

    const handleLogout = (text: string) => {
        if(confirm(text)) {
            sessionStorage.clear();
            location.replace('/');
        }
    }

    const providerValue: AuthContextType = {
        ...state,
        refresh: handleRefresh,
        login: handleLogin,
        logout: handleLogout,
    }

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext }
export default AuthProvider;