import React from 'react'
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const LoginScreen = () => {
  return (
    <>
        <Text> LOGIN</Text>
        <Text> EMAIL</Text>
        <TextInput
        placeholder='ingrese su mail'
        placeholderTextColor='black'
        keyboardType='email-address'/>

<View>
    {/* boton */}
    <TouchableOpacity>
        <Text>Login</Text>
    </TouchableOpacity>
</View>
{/* crear una nueva cuenta */}
<View>
    <TouchableOpacity
    activeOpacity={0.9}
    onPress={()=> console.log('press')}
    
    
    >
<Text> CREAR CUENTA</Text>
    </TouchableOpacity>
</View>
    </>
  )
}

export default LoginScreen;
