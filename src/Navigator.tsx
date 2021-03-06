/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import News from './screens/Main';
import Details from './screens/Details';
import Settings from './screens/Setting';
import {useTranslation} from 'react-i18next';
import {ThemeProvider, ThemeContext} from './Styles/ThemeManger';

const ToggleButton = () => {
  const {toggleTheme, theme} = React.useContext(ThemeContext);
  return (
    <Button
      title={theme === 'Dark' ? 'Light' : 'Dark'}
      onPress={() => toggleTheme()}
      color={'gray'}
    />
  );
};

const Btab = createBottomTabNavigator();

function BtabNav() {
  const {t, i18n} = useTranslation();
  const myOptions = {
    title: 'News',
    headerShown: false,
  };
  return (
    <Btab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'RootStackNav') {
            iconName = focused ? 'newspaper-outline' : 'newspaper-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings-outline' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Btab.Screen
        options={myOptions}
        name="RootStackNav"
        component={RootStackNav}
      />
      <Btab.Screen name="Settings" component={Settings} />
    </Btab.Navigator>
  );
}

const RootStack = createNativeStackNavigator();
function RootStackNav() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerRight: () => <ToggleButton />,
        headerTintColor: 'gray',
        headerStyle: {backgroundColor: '#FEFEFE'},
      }}>
      <RootStack.Screen name="News" component={News} />
      <RootStack.Screen name="Details" component={Details} />
    </RootStack.Navigator>
  );
}
// create a component
const Navigator = () => {
  const {theme} = React.useContext(ThemeContext);
  return <BtabNav />;
};

//make this component available to the app
export default Navigator;
