import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as Google from "expo-google-app-auth";
import styles from './Css/loginstyle';

import axios from 'axios'

const LoginScreen = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("Login");
    try {
      const { type, user } = await Google.logInAsync({
        androidClientId: `607696297500-d29dk1ssear0btfbo847146s9rv8lvev.apps.googleusercontent.com`,
        scopes: ['profile', 'email'],
      });

      let userData = {name: user.name, email: user.email, photo_url: user.photoUrl}

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("welcome to profile page");
        // loginResult.user.name

        axios.post("https://foreeeeeeeeex.herokuapp.com/api/user/signUp", userData).then(() => {
          console.log("data added")
        })
        .catch((e) => {
          console.log("data not added")
        })
        navigation.navigate("Profile", { userData, user });
      }
    } catch (error) {
      console.log("Error login", error);
    }
  };
  return (

<View style={styles.container}>
          {/* <View style={styles.header} >
              <Text style={styles.TextHeader}>Login Page</Text>
          </View>
          
          <KeyboardAwareScrollView
              style={{ flex: 1, width: '90%' }}
              keyboardShouldPersistTaps="always">
              <Image
                  style={styles.logo}
                  source={require('../assets/logo.png')}
              />
              <TextInput
                  style={styles.input}
                  placeholder='E-mail'
                  placeholderTextColor="#aaaaaa"
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
              />
              <TextInput
                  style={styles.input}
                  placeholderTextColor="#aaaaaa"
                  secureTextEntry
                  placeholder='Password'
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
              />
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => onLoginPress()}>
                  <Text style={styles.buttonTitle}>Sign in</Text>
                  
              </TouchableOpacity>
              
            
          </KeyboardAwareScrollView> */}

              <Text style={styles.TextHeader}>Welcome to forex app</Text>

      
      <Image
                  style={styles.logo}
                  source={require('../assets/Logo2.png')}
              />

          <TouchableOpacity
                  style={styles.button}
                  onPress={signInAsync} >
                  <Text style={styles.buttonTitle}>Login with Google</Text>
                  
              </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;

