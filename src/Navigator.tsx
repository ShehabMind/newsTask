/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from './screens/Main';

const RootStack = createNativeStackNavigator();
function RootStackNav() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="News" component={News} />
    </RootStack.Navigator>
  );
}
// create a component
const Navigator = () => {
  return <RootStackNav />;
};

//make this component available to the app
export default Navigator;
