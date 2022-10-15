
import { createContext, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';

export interface AuthProps {
    isLoggedIn: boolean,
    isLoginPending: boolean,
    loginError: string | null
}

export const initialState = {
    isLoggedIn: false,
    isLoginPending: false,
    loginError: null
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const AuthContext = createContext({} as AuthProps);
export const AuthDispatchContext = createContext({} as AuthProps);


export const AuthProvider = ({children}: Props) => {
 const [auth, setAuth] = useReducer(AuthReducer, initialState)

    // const checkLogin = () => {

    // }
 
 return (
    <AuthContext.Provider value={auth}>
            { children }
    </AuthContext.Provider>
 )
}

// Definirse el estado
// interface MapState {
//     isLoggedIn: boolean;
//     isLoginPending: boolean,
//     loginError: string | null
// }

// const INITIAL_STATE: MapState = {
//     isLoggedIn: false,
//     isLoginPending: false,
//     loginError: null
// }

