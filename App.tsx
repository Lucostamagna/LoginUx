import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/Navigator/Navigator';


export default function App() {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}