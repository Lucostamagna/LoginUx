import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  StyleSheet,
} from "react-native";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useForm } from "../Hooks/useForm";
import { Feather } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

interface Props extends StackScreenProps<any, any> {}
const LoginScreen = ({ navigation }: Props) => {
  const { singIn, errorMessage, removeError } = useContext(AuthContext);

  const { email, password, onChange } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;
    Alert.alert("Error", errorMessage, [
      {
        text: "Ok",
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const onLogin = () => {
    console.log({ email, password });
    Keyboard.dismiss(); //oculta el teclado cuando hago login
    singIn({ correo: email, password });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <>
          <Image source={require("../Screen/save.png")} style={styles.image} />
          <Text style={styles.text}>Welcome to Todify!</Text>
          <Text style={styles.text1}>Make your day great!</Text>
          <Text style={styles.textEmail}>Email</Text>
          <View style={styles.viewInfo}>
            <TextInput
              placeholder="ingrese su mail"
              placeholderTextColor="#7F8C8D"
              keyboardType="email-address"
              selectionColor="black"
              onChangeText={(value) => onChange(value, "email")}
              value={email}
              style={{
                color: "#323646",
                padding: 10,
              }}
            />
          </View>
          <Text style={styles.textPassword}>Password</Text>
          <View style={styles.viewButton}>
            <TextInput
              style={{ color: "#323646", padding: 10, height: 90 }}
              secureTextEntry
              onChangeText={(value) => onChange(value, "password")}
              value={password}
              placeholder="********"
            />
            <Feather name="eye" size={24} color="#323646" />
          </View>
          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={{ fontSize: 16, color: "#FFF" }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            activeOpacity={0.8}
            onPress={() => navigation.replace("RegistreScreen")}
          >
            <Text style={styles.textAccount}>Don't have an account? </Text>
            <Text style={styles.textRegistre}>Register!</Text>
          </TouchableOpacity>
        </>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  image: {
    width: 175,
    height: 175,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 70,
  },
  text: {
    fontSize: 30,
    color: "#323646",
    alignSelf: "center",
    marginTop: 25,
  },
  text1: {
    fontSize: 16,
    color: "#323646",
    alignSelf: "center",
  },
  textEmail: {
    fontSize: 16,
    color: "#323646",
    marginTop: 20,
  },
  viewInfo: {
    backgroundColor: "#f6f6f6",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  textPassword: {
    fontSize: 16,
    color: "#323646",
    marginTop: 20,
  },
  viewButton: {
    backgroundColor: "#f6f6f6",
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#50e3c2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 20,
  },
  button1: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-end",
  },
  textAccount: {
    fontSize: 14,
    color: "black",
  },
  textRegistre: {
    fontSize: 14,
    color: "#50e3c2",
  },
});
export default LoginScreen;
