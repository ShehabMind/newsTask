/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {View, StyleSheet, ActivityIndicator, Image} from 'react-native';
import {Text, NativeBaseProvider, ScrollView} from 'native-base';
import NewsCard from '../Components/NewsCard';
import newsApi from '../API/News';
// create a component
const Details = props => {
  const {source, author, title, description, content, publishedAt, urlToImage} =
    props.route.params.item;
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetNewsFromApi();
  }, []);
  function GetNewsFromApi() {
    newsApi
      .get('top-headlines?country=us&apiKey=030a04ab01944d36825b48e027697fb2')
      .then(res => {
        setNews(res.data.articles);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return isLoading ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.nameView}>
          <Text style={styles.name}>{source.name}</Text>
        </View>

        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={{
              uri: urlToImage
                ? urlToImage
                : 'https://arts.tu.edu.ly/wp-content/uploads/2020/02/placeholder.png',
            }}
          />
        </View>
        <View style={styles.authorView}>
          <Text style={styles.authorText}>
            Article By : {author ? author : 'Unknown'}
          </Text>
          <Text style={styles.authorText}>
            {moment(publishedAt).format('lll')}
          </Text>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#FEBEFE',
    borderRadius: 16,
  },

  nameView: {
    justifyContent: 'center',
    height: '8%',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  imgView: {
    width: '98%',
    height: '50%',
    backgroundColor: 'yellow',
  },
  authorView: {
    width: '98%',
    height: '6%',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Rubik-Bold',
  },
  img: {width: '100%', height: '100%', borderRadius: 15},
  authorText: {fontFamily: 'Rubik-Light'},
});

//make this component available to the app
export default Details;
