import React, { createContext, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    //no token, no autenticado
    if (!token) return dispatch({ type: "notAuthenticated" });
    //hay token,
    const resp = await userDB.get("/auth");
    if (resp.status !== 200) {
      return dispatch({ type: "notAuthenticated" });
    }

    dispatch({
      type: "signUp",
      payload: {
        token: resp.data.token,
        user: resp.data.usuario,
      },
    });
  };

  const singIn = async ({ correo, password }: LoginData) => {
    try {
      const { data } = await userDB.post<LoginResponse>("/auth/login", {
        correo,
        password,
      });
      dispatch({
        type: "signUp",
        payload: {
          token: data.token,
          user: data.usuario,
        },
      });

      await AsyncStorage.setItem("token", data.token);
    } catch (error) {
      console.log({ error });
      dispatch({
        type: "addError",
        payload: "informacion incorrecta",
      });
    }
  };

  const singUp = () => {};
  const singOut = () => {};
  const logOut = () => {};
  const removeError = () => {
    dispatch({
      type: "removeError",
    });
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
