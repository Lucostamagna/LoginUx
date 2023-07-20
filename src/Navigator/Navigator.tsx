import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screen/LoginScreen';
import RegistreScreen from '../Screen/RegistreScreen';
import ProtectedScreen from '../Screen/ProtectedScreen';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';
import LoadingScreen from '../Screen/LoadingScreen';
import ProductNavigator from './ProductNavigator';


const Stack = createStackNavigator();

export const Navigator = () => {

  const {status}=useContext(AuthContext)

if(status ==='checking') return <LoadingScreen/>
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
    <>
    <Stack.Screen name="ProductNavigator" component={ProductNavigator} />
    <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
    </>
    
  )
}

     
      
       
      
    </Stack.Navigator>
  );
}