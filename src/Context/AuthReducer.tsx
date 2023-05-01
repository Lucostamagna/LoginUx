import { Usuario } from "../Interfaces/AppInterface";






//estado inicial
export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    errorMessage:string;
    token:string|null;
    user:Usuario  |null;
}
type AuthAction=
| {type:'signUp', payload:{token: string, user:Usuario} }
|{type:'addError', payload: string}
|{type:'removeError'}
|{type:'notAuthenticated'} //si  el token falla, esta accion limpia mi estado y lo deja como el inicial
|{type: 'logout'} //cerrar sesion

//CREO MI REDUCER

export const authReducer= (state: AuthState, action: AuthAction) : AuthState=>{
switch (action.type) {
    case 'addError':
        return {
            ...state,
            user:null, //si hay un error el usuario es null
            status:'not-authenticated', //si hay un erro no va a estar autenticado
            token: null,
            errorMessage: action.payload,
            

        }
        case 'removeError': {
            return {
                ...state,
              errorMessage: ''  

            }
        }
        case 'signUp': {
            return {
                ...state,
                errorMessage:'',
                status: 'authenticated',
                token: action.payload.token,
                user: action.payload.user
            }

        }
        case 'logout': //estos dos casos hacen lo mismo
        case 'notAuthenticated':{
            return {
                ...state,
                status:'not-authenticated',
                token:null,
                user: null,
            }
        }
       
        default:
            return state;
    }
}
