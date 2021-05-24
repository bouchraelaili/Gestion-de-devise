import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Screen/LoginScreen/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Registration from './src/Screen/RegistrationScreen/RegistrationScreen';
// import Chart from './src/Screen/chart/Chart';

import { NavigationContainer } from '@react-navigation/native'


// function ChartScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//      <Chart/>
//     </View>
//   );
// }




function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
     <Login/>
    </View>
  );
}




 function RegistrationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
     <Registration/>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer >
      
    <Tab.Navigator
     tabBarOptions={{
      labelStyle: { fontSize: 16,marginBottom:15,color:'white' },
      tabStyle: { width: 100 },
      style: { backgroundColor: '#840084' },
    }}
    >     
     <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Register" component={RegistrationScreen}/>
      {/* <Tab.Screen name="Chart" component={ChartScreen}/> */}


     
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
