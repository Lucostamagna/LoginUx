import React, {createContext} from 'react'

//que informacion quiero que este disponible para toda mi app?
//uso type y no interface por que no voy a expandir
type AuthContectProps={
errorMessage:string; //cuando sucesa algun error puedo almacenarlo aqui
token:string|null;
 //respuesta del backend                                                                                          

}

const AuthContext = createContext({});