import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Pressable } from "react-native";

const ProfileScreen = ({ route, navigation }) => {
  const DATA= [
    {
      id: 1,
      name: "EUR / U.S. DOLLAR",
      img:  "https://ih1.redbubble.net/image.1190557415.5368/ur,pin_small_front,wide_portrait,750x1000.jpg",
      redirectTo: "https://www.tradingview.com/symbols/SPX/",
      price: 100
    },
    {
      id: 2,
      name: "EURO / YEN JAPONAIS",
      img:  "https://ih1.redbubble.net/image.1190557415.5368/ur,pin_small_front,wide_portrait,750x1000.jpg",
      redirectTo: "https://www.tradingview.com/symbols/TVC-IXIC/",
      price: 200
    },
    {
      id: 3,
      name: "AUSTRALIAN DOLLAR / JAPANESE YEN",
      img:  "https://ih1.redbubble.net/image.1190557415.5368/ur,pin_small_front,wide_portrait,750x1000.jpg",
      redirectTo: "https://www.tradingview.com/symbols/DJ-DJI/",
      price: 30
    },
    {
      id: 1,
      name: "INDICE DEVISE DOLLAR U.S.",
      img:  "https://ih1.redbubble.net/image.1190557415.5368/ur,pin_small_front,wide_portrait,750x1000.jpg",
      redirectTo: "https://www.tradingview.com/symbols/SPX/",
      price: 100
    },
    {
      id: 1,
      name: "EUR / U.S. DOLLAR",
      img:  "https://ih1.redbubble.net/image.1190557415.5368/ur,pin_small_front,wide_portrait,750x1000.jpg",
      redirectTo: "https://www.tradingview.com/symbols/SPX/",
      price: 100
    },
    {
      id: 1,
      name: "EUR / U.S. DOLLAR",
      img:  "https://ih1.redbubble.net/image.1190557415.5368/ur,pin_small_front,wide_portrait,750x1000.jpg",
      redirectTo: "https://www.tradingview.com/symbols/SPX/",
      price: 100
    },
    {
      id: 1,
      name: "EUR / U.S. DOLLAR",
      img:  "https://ih1.redbubble.net/image.1190557415.5368/ur,pin_small_front,wide_portrait,750x1000.jpg",
      redirectTo: "https://www.tradingview.com/symbols/SPX/",
      price: 100
    },
    {
      id: 1,
      name: "EUR / U.S. DOLLAR",
      img:  "https://ih1.redbubble.net/image.1190557415.5368/ur,pin_small_front,wide_portrait,750x1000.jpg",
      redirectTo: "https://www.tradingview.com/symbols/SPX/",
      price: 100
    },
    {
      id: 1,
      name: "EUR / U.S. DOLLAR",
      img:  "https://ih1.redbubble.net/image.1190557415.5368/ur,pin_small_front,wide_portrait,750x1000.jpg",
      redirectTo: "https://www.tradingview.com/symbols/SPX/",
      price: 100
    },
  ]

  const { userData, user } = route.params;
  console.log("user from google", userData);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.areaView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.cryptoLists}>
            {
              DATA.map((data, i) => {
                return (
                  <View style={styles.cryptoListsData} key={i}>
                    <View style={styles.cryptoListsTopData}>
                      <Image source={{uri: `${data.img}`}}  style={{width:70, height:70,borderRadius:30,}} style={styles.imgdata} />
                      <View style={styles.Viewcont} >
                      <Text style={styles.dataname}>{data.name}</Text>
                      <Text style={styles.dataprice}>{data.price} $</Text>
                      </View>
                    <Pressable style={[styles.button]} onPress={() =>{ navigation.navigate("Chart", { userData, data: data.redirectTo, cryptoPrice: data.price }); }}>
                      <Text style={styles.textchart}>More</Text>
                    </Pressable>

                    </View>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>

    



  );
};

export default ProfileScreen;

const styles = StyleSheet.create({

  Viewcont:{
width:150,
  },
  container: {
    backgroundColor:'#bfb051',
    flex:1
},
dataname:{
marginTop:10,
marginLeft:20
},
dataprice:{
  marginLeft:20,
  fontWeight:'bold'

},
imgdata:{
  width:70,
  height:70,
},
 
 
  cryptoLists: {
  },
  cryptoListsData: {
    padding: 1,
    margin: 10,
    width:340,
    backgroundColor: "#F8F8F8",
    borderRadius: 4
  },
  scrollView: {
    marginHorizontal: 0,
  },
  areaView: {
    marginTop: 10,
    marginBottom: 10
  },
 
  cryptoListsTopData: {
    flexDirection: "row",
    marginLeft:10,

    
  },
  button: {
    borderRadius: 6,
    backgroundColor: "#763857" ,
    width:100,
    height:50,
    marginTop:10

  },
  textchart: {
    textAlign:'center',
    marginTop:14,
    color:"#bfb051",
    fontWeight:"bold"
  }
});

