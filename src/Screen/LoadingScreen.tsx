import React from 'react'
import {
    View,
    Text,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    Alert,
  } from "react-native";
  import LottieView from "lottie-react-native";
  const { width, height } = Dimensions.get("window");
const LoadingScreen = () => {
  return (
     <View style={{ flex: 1 }}> 
         <LottieView
            autoPlay={true}
            style={{
              width: width,
              backgroundColor: "#FFF",
              alignSelf: "center",
              marginTop:40
            }}
            source={require("../../assets/99274-loading.json")}
          /> 

        <Text
            style={{
        
              fontSize: 30,
              color: "black",
              alignSelf: "center",
              position: "absolute",
              top: height * 0.40,
            }}
          >
            Loading
          </Text>
        </View> 
  )
}

export default LoadingScreen