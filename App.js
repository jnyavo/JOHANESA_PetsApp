import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/home";

import loginScreen from './screens/login';
import PetDetailsScreen from "./screens/petDetails";
import  RegisterScreen from "./screens/registerUser";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="PetDetails" component={PetDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


