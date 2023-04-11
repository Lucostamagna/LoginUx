import React from "react";
import { View, Text, Dimensions, Image, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useForm } from "../Hooks/useForm";
import LottieView from "lottie-react-native";
import { Feather } from "@expo/vector-icons";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import { useState } from 'react';



const { width, height } = Dimensions.get("window");
const LoginScreen = () => {
const [isLoading, setIsLoading]=useState(false) 
 
  //onchange me va a permitir cambiar los datos del formulario
  const { email, password, onChange } = useForm({
    email: "",
    password: "",
  });

  const onLogin = () => {
    console.log({ email, password });
    Keyboard.dismiss();
  };

  return (
   
    <View style={{ flex: 1, backgroundColor: "#FFF", padding: 20 }}>
      
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* <View style={{ flex: 1 }}>
          <LottieView
            autoPlay={true}
            style={{
              width: width,
              backgroundColor: "#FFF",
              alignSelf: "center",
            }}
            source={require("../../assets/99274-loading.json")}
          />

          <Text
            style={{
              fontFamily: "",
              fontSize: 30,
              color: "black",
              alignSelf: "center",
              position: "absolute",
              top: 225,
            }}
          >
            Loading
          </Text>
        </View> */}

        <>
          {/* <Animated.View entering={FadeInDown.delay(300).duration(300)}> */}
          <Image
            source={require("../Screen/save.png")}
            style={{
              width: 175,
              height: 175,
              resizeMode: "contain",
              alignSelf: "center",
              marginTop: 20,
            }}
          />

          <Text
            style={{
              fontSize: 30,
              color: "#323646",
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            Welcome to Todify!
          </Text>

          <Text style={{ fontSize: 16, color: "#323646", alignSelf: "center" }}>
            Make your day great!
          </Text>

          {/* <Animated.View entering={FadeInDown.delay(600).duration(300)} style={{ flex: 1 }}> */}
          <Text style={{ fontSize: 16, color: "#323646", marginTop: 20 }}>
            Email
          </Text>
          <View
            style={{
              backgroundColor: "#f6f6f6",
              height: 50,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              placeholder="ingrese su mail"
              placeholderTextColor="#7F8C8D "
              keyboardType="email-address"
              selectionColor="black"
              onChangeText={(value) => onChange(value, "email")}
              value={email}
              onSubmitEditing={onLogin}
              style={{
                color: "#323646",
                padding: 10,
              }}
            />
          </View>

          <Text style={{ fontSize: 16, color: "#323646", marginTop: 20 }}>
            Password
          </Text>
          <View
            style={{
              backgroundColor: "#f6f6f6",
              height: 50,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              style={{ color: "#323646", padding: 10 }}
              secureTextEntry
              onChangeText={(value) => onChange(value, "password")}
              value={password}
              onSubmitEditing={onLogin}
              placeholder="***"
              placeholderTextColor="#7F8C8D "
            />
            <Feather name="eye" size={24} color="#323646" />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#50e3c2",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              marginTop: 20,
            }}
            onPress={onLogin}
          >
            <Text style={{ fontSize: 16, color: "#FFF" }}>Login</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: "#50e3c2",
              padding: 10,
              textAlign: "center",
            }}
          >
            Forgot password?
          </Text>

          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontSize: 14, color: "#323646" }}>
              Don't have an account?{" "}
            </Text>
            <Text
              style={{
                // fontFamily: "Poppins-Medium",
                fontSize: 14,
                color: "#50e3c2",
              }}
            >
              Register!
            </Text>
          </TouchableOpacity>
          {/* </Animated.View> */}
        </>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
