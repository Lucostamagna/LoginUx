import React, {createContext, useReducer} from 'react'
import { Usuario } from '../Interfaces/AppInterface';
import { authReducer, AuthState } from './AuthReducer';

//que informacion quiero que este disponible para toda mi app?
//uso type y no interface por que no voy a expandir
type AuthContextProps={
errorMessage:string; //cuando sucesa algun error puedo almacenarlo aqui
token:string|null;
 user:Usuario |null ;//respuesta del backend                                                                                          
status: 'checking' | 'authenticated' | 'not-authenticated'
//estados de mis usuarios, estados personalizados 
//funciones para ingresar, salir, etc
singUp:()=>void;
singIn:()=>void;
singOut:()=>void;
logOut:()=>void;
removeError:()=>void;
}




const aunthInitialState: AuthState ={
    status:'checking', //revisando el token
    token: null,
    user:null,
    errorMessage:''
}

export const AuthContext = createContext({} as AuthContextProps ); //este es mi context. le indique como debe comportarse

export const AuthProvider=({children}:any)=>{



    //estado inicial cuando se ingresa a la app
    const [state, dispatch] =useReducer(authReducer, aunthInitialState);

     const singUp = ()=>{}
    const singIn=()=>{}
    const singOut=()=>{}
     const logOut=()=>{}
    const removeError=()=>{}






return (
  <AuthContext.Provider
    value={{
      ...state,
      singUp,
      singIn,
      singOut,
      logOut,
      removeError,
    }}
  >
    {children}
  </AuthContext.Provider>
);
}
