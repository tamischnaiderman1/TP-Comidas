import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Login from './Login.js';
import Home from './Home.js';
import Menu from './Menu.js';
import Detalle from './Detalle.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { AuthProvider } from './context/index.js';
import { ContextProvider } from "./contextState";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <AuthProvider>
      <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen 
          name="Login" 
          component={Login} 
        />*/}
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="Detalle" 
          component={Detalle} 
        />
        <Stack.Screen 
          name="Menu" 
          component={Menu} 
        />
      
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
    </ContextProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
