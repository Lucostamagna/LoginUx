import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { useForm } from "../Hooks/useForm";

const { width, height } = Dimensions.get("window");

interface Props extends StackScreenProps<any, any> {}

const RegistreScreen = ({ navigation }: Props) => {
  const { email, password,name, onChange } = useForm
  ({
    name:"",
    email: "",
    password: "",
  });

  const onRegister = () => {
    console.log({ email, password, name });
    Keyboard.dismiss();
  };
  

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF", padding: 20 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <>
          <Image
            source={require("../Screen/save.png")}
            style={{
              width: 135,
              height: 135,
              resizeMode: "contain",
              alignSelf: "center",
              marginTop: 20,
            }}
          />

          <Text
            style={{
              fontSize: 27,
              color: "#323646",
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            Register
          </Text>

          <Text style={{ fontSize: 16, color: "#323646", marginTop: 20 }}>
            Name
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
              placeholder="enter your email"
              
              selectionColor="black"
              onChangeText={(value) => onChange(value, "email")}
              value={email}
              // onSubmitEditing={onRegister}
              autoCorrect={false}
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
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              placeholder="***********"
              
              selectionColor="black"
              onChangeText={(value) => onChange(value, "password")}
              value={password}
              // onSubmitEditing={onRegister}
              style={{
                color: "#323646",
                padding: 10,
              }}
              
            />
            
            
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
            onPress={() => navigation.navigate("Loginprueba")}
          >
            
            <Text style={{ fontSize: 16, color: "#FFF" }}>Create Account</Text>
          </TouchableOpacity>
        </>
      </KeyboardAvoidingView>
    </View>
  );
};


export default RegistreScreen
