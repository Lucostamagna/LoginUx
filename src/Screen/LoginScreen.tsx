import React from 'react'
import { View, Text, Dimensions, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useForm } from '../Hooks/useForm';
import LottieView from 'lottie-react-native';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';


const LoginScreen = () => {
    const { width, height } = Dimensions.get('window')
  //onchange me va a permitir cambiar los datos del formulario
  const { email, password, onChange } = useForm({
    email: "",
    password: "",
  });

  const onLogin = () => {
    console.log({ email, password });
    // Keyboard.dismiss();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF", padding: 20 }}>
      <View style={{ flex: 1 }}>
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
      </View>
      <>

    <Animated.View>  
<Image source={require('../Screen/save.png')} style={{ width: 175, height: 175, resizeMode: 'contain', alignSelf: 'center', marginTop: 20 }} />

<Text style={{  fontSize: 30, color: '#323646', alignSelf: 'center', marginTop: 20 }}>Welcome to Todify!</Text>
 <Text style={{  fontSize: 16, color: '#323646', alignSelf: 'center' }}>Make your day great!</Text>
 </Animated.View> 

      </>

      
      
      

      {/* <Text> EMAIL</Text>
      <TextInput
        placeholder="ingrese su mail"
        placeholderTextColor="black"
        keyboardType="email-address"
        underlineColorAndroid="black"
        selectionColor="black"
        onChangeText={(value) => onChange(value, "email")}
        value={email}
        onSubmitEditing={onLogin}
      /> */}
      {/* <Text> Constraseña</Text>
      <TextInput
        placeholder="*********"
        placeholderTextColor="black"
        underlineColorAndroid="black"
secureTextEntry
        onChangeText={(value) => onChange(value, "password")}
        value={password}
        onSubmitEditing={onLogin}
      /> */}
      {/* <View> */}
      {/* boton */}
      {/* <TouchableOpacity activeOpacity={0.9} onPress={onLogin}>
          <Text>Login</Text>
        </TouchableOpacity> */}
      {/* </View> */}
      {/* crear una nueva cuenta */}
      {/* <View>
       <TouchableOpacity >
          <Text> CREAR CUENTA</Text>
        </TouchableOpacity>
       </View>   */}
    </View>
  );
};

export default LoginScreen;
