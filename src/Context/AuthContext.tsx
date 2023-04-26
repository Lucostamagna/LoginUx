import React, {createContext} from 'react'
import { Usuario } from '../Interfaces/AppInterface';

//que informacion quiero que este disponible para toda mi app?
//uso type y no interface por que no voy a expandir
type AuthContextProps={
errorMessage:string; //cuando sucesa algun error puedo almacenarlo aqui
token:string|null;
 user:Usuario;//regspuesta del backend                                                                                          
status: 'checking' | 'authenticated' | 'not-authenticated'
//estados de mis usuarios, estados personalizados 
//funciones para ingresar, salir, etc
singUp:()=>void;
singIn:()=>void;
singOut:()=>void;
logOut:()=>void;
removeError:()=>void;
}

export const AuthContext = createContext({} as AuthContextProps ); //este es mi context. le indique como debe comportarse

export const AuthProvider=({children}:any)=>{
return(
    <AuthContext.Provider value={{

    }}>
        {children}
    </AuthContext.Provider>
)
}
