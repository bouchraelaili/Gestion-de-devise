import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';

import axios from "axios"

const WalletNav = ({ navigation, route }) => {
    const { userData, data } = route.params;

    useEffect(() => {
        getWalletValue();
    });
    const [Wallet, SetWallet] = useState([])
    const [Sold, SetSold] = useState([])

    const getWalletValue = async () => {
        await axios.get(`https://foreeeeeeeeex.herokuapp.com/api/user/info/${userData.email}`).then((walletdata) => {
            SetWallet(walletdata.data.walletSold)
            SetSold(walletdata.data.sold)
        })
        .catch((e) => {
            console.log(e)
        })
    }
  return (
    <View  style={styles.container}>
        {/* <View style={styles.userInfo}>
            <Image source={{uri: `${userData.photo_url}`}} style={{width:40, height:40,borderRadius:30}} />
            <Text style={styles.userInfoTxt}> {userData.name} </Text>
        </View> */}
<View style={styles.walletcard}>
<Image
                  style={styles.logo}
                  source={require('../assets/undraw_wallet_aym5-removebg-preview.png')}
              />
<Text style={styles.walletNum}>Wallet  :  {Wallet} $ </Text>
</View>
<View style={styles.walletcard}>
<Image
                  style={styles.logo}
                  source={require('../assets/undraw_pay_online_b1hk-removebg-preview.png')}
              />
<View style={styles.Soldecard}>
<Text style={styles.walletNum}>Balance  :  {Sold} $</Text>
</View>
    </View>
    </View>
  );
};

export default WalletNav;

const styles = StyleSheet.create({
    logo:{
        width:80,
        height:80,
        marginLeft:120,
     },
    walletcard:{
        width:300,
        height:150,
        backgroundColor:'#763857',
        marginTop:70,
        marginBottom:100,
        marginLeft:30,
        borderRadius:10,

    

    },
    container :{
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
    walletNum: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "center",
        color:'white'
    }
});

