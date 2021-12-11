/* eslint-disable prettier/prettier */
//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
// create a component
const Settings = () => {
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{(t, 'news')}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Settings;
