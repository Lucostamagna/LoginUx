import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screen/LoginScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
      
    </Stack.Navigator>
  );
}