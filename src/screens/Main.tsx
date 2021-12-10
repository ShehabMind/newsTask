/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';

interface Props {}

const Main: React.FC<Props> = props => {
  const AppLayout = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text> TypeScript </Text>
    </View>
  );
};

Main.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;
