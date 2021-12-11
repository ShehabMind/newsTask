/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NewsCard from '../Components/NewsCard';
import newsApi from '../API/News';
// create a component
const News = ({navigation}) => {
  useEffect(() => {
    NewsRes();
  }, []);

  const NewsRes = async () => {
    const response = await newsApi.get(
      'everything?q=tesla&from=2021-11-11&sortBy=publishedAt&apiKey=030a04ab01944d36825b48e027697fb2',
    );
    console.log(response);
  };

  return (
    <View style={styles.container}>
      <Text>News</Text>
      <NewsCard />
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
export default News;
