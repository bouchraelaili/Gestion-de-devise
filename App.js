import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import LoginScreen from "./navigation/LoginScreen";
import ProfileScreen from "./navigation/ProfileScreen";
import ChartScreen from "./navigation/ChartScreen";
import WebView from "./navigation/WebView"
import Wallet from "./navigation/Wallet"

import { NavigationContainer, DefaultTheme} from "@react-navigation/native";

const MyTheme = {
  dark: true,
  colors: {
    card: '#763857',
    text: 'white',
    border: 'rgb(199, 199, 204)',
    
    
    
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}  options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Welcome to currencies page' }} />
        <Stack.Screen name="Chart" component={ChartScreen} options={{ title: 'Welcome to chart page' }} />
        <Stack.Screen name="WebviewNav" component={WebView} options={{ title: 'Chart' }} />
        <Stack.Screen name="WalletNav" component={Wallet} options={{ title: 'Your Wallet' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
})

// firebase@^5.7.3