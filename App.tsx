import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/Navigator/Navigator';
import { AuthProvider } from './src/Context/AuthContext';


// de esta manera conecto mi authprovider con mi app global
const AppState=({children}: any)=>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}




export default function App() {
  return (
    
    <NavigationContainer>
      <AppState>
      <Navigator/>
      </AppState>
    </NavigationContainer>
  )
}