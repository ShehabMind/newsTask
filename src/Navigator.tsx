/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import News from './screens/Main';
import Details from './screens/Details';
import Settings from './screens/Setting';

const Btab = createBottomTabNavigator();

function BtabNav() {
  return (
    <Btab.Navigator screenOptions={{headerShown: false}}>
      <Btab.Screen name="News" component={News} />
      <Btab.Screen name="Settings" component={Settings} />
    </Btab.Navigator>
  );
}

const RootStack = createNativeStackNavigator();
function RootStackNav() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="News" component={News} />
      <RootStack.Screen name="Details" component={Details} />
    </RootStack.Navigator>
  );
}
// create a component
const Navigator = () => {
  return <BtabNav />;
};

//make this component available to the app
export default Navigator;
