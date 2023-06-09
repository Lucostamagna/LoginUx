import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  StyleSheet,
  Alert,
} from "react-native";
import { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { useForm } from "../Hooks/useForm";
import { AuthContext } from "../Context/AuthContext";

const { width, height } = Dimensions.get("window");

interface Props extends StackScreenProps<any, any> {}




const RegistreScreen = ({ navigation }: Props) => {
  const {singUp, errorMessage, removeError}= useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const { email, password, name, onChange } = useForm({
    name: "",
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


  const onRegister = () => {
    console.log({ email, password, name });
    Keyboard.dismiss();
    singUp({
      nombre:name,
      correo:email,
      password
    })
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <>
          <Image source={require("../Screen/save.png")} style={styles.image} />
          <Text style={styles.textRegistre}>Register</Text>
          <Text style={styles.textName}>Name</Text>
          <View style={styles.view}>
            <TextInput
              placeholder="enter your name"
              autoCapitalize="words"
              onChangeText={(value) => onChange(value, "name")}
              value={name}
              selectionColor="black"
              style={{
                color: "#323646",
                padding: 10,
              }}
            />
          </View>
          <Text style={styles.textEmail}>Email</Text>
          <View style={styles.view1}>
            <TextInput
              placeholder="enter your email"
              selectionColor="black"
              onChangeText={(value) => onChange(value, "email")}
              value={email}
              autoCorrect={false}
              style={{
                color: "#323646",
                padding: 10,
              }}
            />
          </View>
          <Text style={styles.textPassword}>Password</Text>
          <View style={styles.view2}>
            <TextInput
              placeholder="***********"
              secureTextEntry={!showPassword}
              selectionColor="black"
              onChangeText={(value) => onChange(value, "password")}
              value={password}
              style={{
                color: "#323646",
                padding: 10,
              }}
            />
             <TouchableOpacity onPress={toggleShowPassword} activeOpacity={0.8}>
            <Feather name="eye" size={24} color="#323646" /> 
        </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={onRegister}
          >
            <Text style={styles.textbutton}>Create Account</Text>
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
    padding: width * 0.05,
  },
  image: {
    width: width * 0.4,
    height: height * 0.16,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: height * 0.1,
  },
  textRegistre: {
    fontSize: 25,
    color: "#323646",
    alignSelf: "center",
    marginTop: height * 0.02,
  },
  textName: {
    fontSize: 16,
    color: "#323646",
    marginTop: height * 0.02,
  },
  view: {
    backgroundColor: "#f6f6f6",
    height: height * 0.06,
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
  },
  textEmail: {
    fontSize: 16,
    color: "#323646",
    marginTop: height * 0.02,
  },
  view1: {
    backgroundColor: "#f6f6f6",
    height: height * 0.06,
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
  },
  textPassword: {
    fontSize: 16,
    color: "#323646",
    marginTop: height * 0.02,
  },
  view2: {
    backgroundColor: "#f6f6f6",
    height: height * 0.06,
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#50e3c2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.06,
    marginTop: height * 0.03,
  },
  textbutton: {
    fontSize: 16,
    color: "#FFF",
  },
});
export default RegistreScreen;
