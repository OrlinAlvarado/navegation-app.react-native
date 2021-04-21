import { AuthState } from './AuthContext';

type AuthAction = 
    | { type: 'signIn'}
    | { type: 'logout'}
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeName', payload: string }

//Genera Estado
export const authReducer = ( state:AuthState, action: AuthAction ):AuthState => {
    
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'noUserName'
            }
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'changeName':
            return {
                ...state,
                userName: action.payload
            }
    
        default:
            return state;
    }
}