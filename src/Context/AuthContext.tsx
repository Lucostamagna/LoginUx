import React, { createContext, useReducer } from "react";
import { LoginData, LoginResponse, Usuario } from "../Interfaces/AppInterface";
import { authReducer, AuthState } from "./AuthReducer";
import userDB from "../Api/UserDb";

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: "checking" | "authenticated" | "not-authenticated";

  singUp: () => void;
  singIn: (loginData: LoginData) => void;
  singOut: () => void;
  logOut: () => void;
  removeError: () => void;
};

const aunthInitialState: AuthState = {
  status: "checking",
  token: null,
  user: null,
  errorMessage: "",
};

export const AuthContext = createContext({} as AuthContextProps); 

export const AuthProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer(authReducer, aunthInitialState);

  const singIn = async ({ correo, password }: LoginData) => {
    try {
      const {data} = await userDB.post<LoginResponse>("/auth/login", {
        correo,
        password,
      });
     dispatch({
      type:'signUp',
      payload :{
        token: data.token,
        user:data.usuario
      }
     })
    } catch(error) {
      console.log({error})
      dispatch({
        type: "addError",
        payload:'informacion incorrecta'
      })
    }
  };

  const singUp = () => {};
  const singOut = () => {};
  const logOut = () => {};
  const removeError = () => {
    dispatch({
      type:'removeError'
    })
  };

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
