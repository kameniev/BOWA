import { StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/utils/themes';
import { useFonts } from '@use-expo/font';
import  AppLoading  from 'expo-app-loading';
import Router from './src/screens/Router'






export default function App() {

const [isLoaded] = useFonts({
  "RobotoRegular": require("./src/assets/fonts/Roboto-Regular.ttf")
})
if (!isLoaded) return <AppLoading></AppLoading>
   else return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content"></StatusBar>
      <Router></Router>   
      </ThemeProvider>
    </SafeAreaProvider>
  )

}


