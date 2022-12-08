import { LangConfig, LangType, ObjectAny } from '@@types/common';

// Auth ContextAPI
export interface AuthStateType {
    isAuthenticated: boolean,
    user: ObjectAny,
    token: ObjectAny,
    otpToken: string,
}

export interface AuthContextType extends AuthStateType {
    refresh: () => void,
	login: (userId: string, password: string) => Promise<void>,
	logout: (text: string) => void,
}

export type AuthContextActionType =
	| { type: 'LOGIN_PROCESS', payload: ObjectAny}
	| { type: 'LOGOUT_PROCESS', payload: ObjectAny}
	| { type: 'SESSION_REFRESH'}

// Config ContextAPI
export type ConfigContextType = {
    resetConfig: () => void,
    langConfig: LangConfig,
    setLanguage: (type?: LangType) => LangConfig
}