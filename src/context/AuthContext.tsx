import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';

//Definir como luce, que informacion tendre aqui.
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined
}

//Como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUserName: (userName: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componenete proveedor del estado

export const AuthProvider = ({ children }: any) => {
    const [authState, dispatch] = useReducer(authReducer, authInitialState);
    
    const signIn = () => {
        dispatch({ type: 'signIn'});
    }
    const logout = () => {
        dispatch({ type: 'logout'});
    }
    
    const changeFavoriteIcon = ( iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    }
    const changeUserName = ( userName: string) => {
        dispatch({ type: 'changeName', payload: userName });
    }
    
    return (
       <AuthContext.Provider value={{
           authState,
           signIn,
           logout,
           changeFavoriteIcon,
           changeUserName
       }}>
           { children }
       </AuthContext.Provider> 
    )
}
