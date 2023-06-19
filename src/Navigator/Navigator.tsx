import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screen/LoginScreen';
import RegistreScreen from '../Screen/RegistreScreen';
import ProtectedScreen from '../Screen/ProtectedScreen';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';


const Stack = createStackNavigator();

export const Navigator = () => {

  const {status}=useContext(AuthContext)


  return (
    <Stack.Navigator screenOptions={
     {
      headerShown: false,
     }
    }>

{
  (status !== "authenticated") 
  ? (
    <>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegistreScreen" component={RegistreScreen} options={{ headerShown: false }}/>
    </>
  ) : 
  (
    <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
  )
}

     
      
       
      
    </Stack.Navigator>
  );
}