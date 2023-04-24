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

const { width, height } = Dimensions.get("window");

interface Props extends StackScreenProps<any, any> {}

const RegistreScreen = ({ navigation }: Props) => {
  

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
              placeholderTextColor="#7F8C8D"
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
              placeholderTextColor="#7F8C8D"
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
              placeholder="***********"
              placeholderTextColor="#7F8C8D"
              selectionColor="black"
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
          >
            <Text style={{ fontSize: 16, color: "#FFF" }}>Create Account</Text>
          </TouchableOpacity>
        </>
      </KeyboardAvoidingView>
    </View>
  );
};


export default RegistreScreen
