import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Image, Linking, Pressable } from 'react-native';

import axios from "axios"

const ChartScreen = ({ navigation, route }) => {
    const { userData, data, cryptoPrice } = route.params;

    const webView = () => {
        navigation.navigate("WebviewNav", { userData, data });
    }
    const walletFun = () => {
        navigation.navigate("WalletNav", { userData, data })
    }
    const buyFun = () => {
        let GetUserData = {email: userData.email, price: cryptoPrice}

        axios.post("https://foreeeeeeeeex.herokuapp.com/api/user/buy", GetUserData).then(() => {
            console.log("data updated")
          })
          .catch((e) => {
            alert('you have not money')
          })
    }
    const sellFun = () => {
        let GetUserData = {email: userData.email, price: cryptoPrice}

        axios.post("https://foreeeeeeeeex.herokuapp.com/api/user/sell", GetUserData).then(() => {
            console.log("data updated")
          })
          .catch((e) => {
            alert('you have not money')
          })
    }

  return (
    <View style={styles.container}>
         <View style={styles.cont}>
         <Image
                  style={styles.logo}
                  source={require('../assets/undraw_visual_data_re_mxxo-removebg-preview.png')}
              />
        <Pressable onPress={webView}  style={styles.BTN}>
            <Text style={{fontWeight: "bold", textAlign: "center",color:'white'}} >Redirect to chart</Text>
        </Pressable>
         </View>   
         <View style={styles.cont}>
         <Image
                  style={styles.logo}
                  source={require('../assets/undraw_visual_data_re_mxxo-removebg-preview.png')}
              />
        <Pressable onPress={walletFun}  style={styles.BTN}>
            <Text style={{fontWeight: "bold", textAlign: "center",color:'white'}} >Wallet</Text>
        </Pressable>
         </View> 
         <View style={styles.cont}>
         <Image
                  style={styles.logo}
                  source={require('../assets/undraw_visual_data_re_mxxo-removebg-preview.png')}
              />
        <Pressable onPress={buyFun}  style={styles.BTN}>
            <Text style={{fontWeight: "bold", textAlign: "center",color:'white'}} >Buy</Text>
        </Pressable>
         </View> 
         <View style={styles.cont}>
         <Image
                  style={styles.logo}
                  source={require('../assets/undraw_visual_data_re_mxxo-removebg-preview.png')}
              />
        <Pressable onPress={sellFun}  style={styles.BTN}>
            <Text style={{fontWeight: "bold", textAlign: "center",color:'white'}} >Sell</Text>
        </Pressable>
         </View> 
      
{/* 
        <View style={styles.btnGroup}>
            <Pressable onPress={walletFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >YOUR WALLET</Text>
            </Pressable>
            <Pressable onPress={buyFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >BUY</Text>
            </Pressable>
            <Pressable onPress={sellFun} style={styles.BTN}>
                <Text style={{fontWeight: "bold"}} >SELL</Text>
            </Pressable>
        </View> */}
    </View>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({

    logo:{
       width:150,
       height:150,
    },
    cont:{
        width:300,
        height:50,
        flexDirection: "row",
        marginLeft:30,
        marginTop:30,
        marginBottom:60


        
    
     },
    container: {
        flex: 1,
        backgroundColor:'#bfb051',
        
    },
    userInfo: {
        flex: 1,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline"
    },
    userInfoTxt: {
        fontWeight: "bold"
    },
    btnGroup: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    BTN: {
        backgroundColor: '#763857',
        width:150,
        height: 48,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop:80
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
});
