import React from 'react'
import { useContext } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
  } from "react-native";
import { AuthContext } from '../Context/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';



 
const ProtectedScreen = () => {

  const{user, token, logOut}=useContext(AuthContext)
  return (
    <View>

<Text>
  {JSON.stringify(user,null,5)}
</Text>

<Text>
  {token}
</Text>
<View>
  <TouchableOpacity onPress={logOut}>
    <Text>Log Out</Text>
  </TouchableOpacity>
</View>
    </View>
  )
}

export default ProtectedScreen