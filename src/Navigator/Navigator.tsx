import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screen/LoginScreen';
import RegistreScreen from '../Screen/RegistreScreen';


const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="RegistreScreen" component={RegistreScreen} options={{ headerShown: false }}/>
       
      
    </Stack.Navigator>
  );
}