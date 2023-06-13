import React, { createContext, useReducer } from "react";
import { LoginData, LoginResponse, Usuario } from "../Interfaces/AppInterface";
import { authReducer, AuthState } from "./AuthReducer";
import userDB from "../Api/UserDb";

//que informacion quiero que este disponible para toda mi app?
//uso type y no interface por que no voy a expandir
type AuthContextProps = {
  errorMessage: string; //cuando sucesa algun error puedo almacenarlo aqui
  token: string | null;
  user: Usuario | null; //respuesta del backend
  status: "checking" | "authenticated" | "not-authenticated";
  //estados de mis usuarios, estados personalizados
  //funciones para ingresar, salir, etc
  singUp: () => void;
  singIn: (loginData: LoginData) => void;
  singOut: () => void;
  logOut: () => void;
  removeError: () => void;
};

const aunthInitialState: AuthState = {
  status: "checking", //revisando el token
  token: null,
  user: null,
  errorMessage: "",
};

export const AuthContext = createContext({} as AuthContextProps); //este es mi context. le indique como debe comportarse

export const AuthProvider = ({ children }: any) => {
  //estado inicial cuando se ingresa a la app
  const [state, dispatch] = useReducer(authReducer, aunthInitialState);

  //creo una nueva interfaz y cuando mande el sigin voy a mandar mi interfaz con los datos
  const singIn = async ({ correo, password }: LoginData) => {
    try {
      const resp = await userDB.post<LoginResponse>("/auth/login", {
        correo,
        password,
      });
      console.log(resp.data);
    } catch (error) {
      console.log({ error });
    }
  };

  const singUp = () => {};

  const singOut = () => {};
  const logOut = () => {};
  const removeError = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        singIn,
        singUp,

        singOut,
        logOut,
        removeError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
