import React from 'react';
import {TouchableOpacity,Text,Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import * as Facebook from 'expo-facebook';
async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: '241618494384393',
      });
      const {
        type,
        token,
        expirationDate,
        
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['email','public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        console.log($(await response.json()))
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
function FacebookSignin() {
    return (
        <TouchableOpacity
        style={styles.buttonFb}
        onPress={() => logIn().then(() => console.log('Signed'))}>
        <Text style={styles.buttonTitle}>Facebook</Text>
      </TouchableOpacity>
    )
}

export default FacebookSignin
