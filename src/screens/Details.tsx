/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {View, StyleSheet, ActivityIndicator, Image} from 'react-native';
import {Text, NativeBaseProvider} from 'native-base';

import newsApi from '../API/News';
import {ThemeContext, ThemeProvider} from '../Styles/ThemeManger';
// create a component
const Details = props => {
  const {source, author, description, content, publishedAt, urlToImage} =
    props.route.params.item;
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetNewsFromApi();
  }, []);
  function GetNewsFromApi() {
    newsApi
      .get('top-headlines?country=us&apiKey=ee0458f8f5554c80a82eb5d8abfd6677')
      .then(res => {
        setNews(res.data.articles);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }
  const {theme} = React.useContext(ThemeContext);
  return isLoading ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <NativeBaseProvider>
      <View style={[styles.container, styles[`container${theme}`]]}>
        <View style={styles.nameView}>
          <Text style={[styles.name, styles[`text${theme}`]]}>
            {source.name}
          </Text>
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
          <Text style={[styles.authorText, styles[`text${theme}`]]}>
            Article By : {author ? author : 'Unknown'}
          </Text>
          <Text style={[styles.authorText, styles[`text${theme}`]]}>
            {moment(publishedAt).format('lll')}
          </Text>
        </View>
        <View style={styles.contentView}>
          <Text style={[styles.contentText, styles[`text${theme}`]]}>
            {description}
          </Text>
          <Text style={[styles.contentText, styles[`text${theme}`]]}>
            {content}
          </Text>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    // backgroundColor: 'red',
    borderRadius: 16,
  },
  containerLight: {backgroundColor: '#FEFEFE'},
  containerDark: {backgroundColor: '#212121'},
  nameView: {
    justifyContent: 'center',
    height: '8%',
    alignItems: 'center',
  },
  imgView: {
    width: '98%',
    height: '50%',
  },
  authorView: {
    width: '100%',
    height: '8%',

    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },
  contentView: {
    width: '95%',
    height: '44%',

    margin: 4,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Rubik-Bold',
  },
  textLight: {color: '#212121'},
  textDark: {color: '#FEFEFE'},
  img: {width: '100%', height: '100%', borderRadius: 15},
  authorText: {fontFamily: 'Rubik-Bold'},
  contentText: {fontFamily: 'Rubik-Light'},
});

//make this component available to the app
export default Details;
