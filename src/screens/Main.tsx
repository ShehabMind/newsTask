/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import NewsCard from '../Components/NewsCard';
import newsApi from '../API/News';
// create a component
const News = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function GetNewsFromApi() {
      newsApi
        .get('top-headlines?country=bg&apiKey=030a04ab01944d36825b48e027697fb2')
        .then(res => {
          setNews(res.data.articles);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    }
    GetNewsFromApi();
  }, []);

  return isLoading ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <View style={styles.container}>
      <Text>calls</Text>
      <FlatList
        data={news}
        renderItem={({item}) => <Text>{item.author}</Text>}
      />
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
