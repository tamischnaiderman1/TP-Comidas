import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Login from './Login.js';
import Home from './Home.js';
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

export default function App() {
  
  return (
    <AuthProvider>
      <Home/>
    </AuthProvider>
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
