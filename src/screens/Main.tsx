/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {
  Box,
  FlatList,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  NativeBaseProvider,
} from 'native-base';
import NewsCard from '../Components/NewsCard';
import newsApi from '../API/News';
// create a component
const News = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetNewsFromApi();
  }, []);
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
  return isLoading ? (
    <View>
      <ActivityIndicator />
    </View>
  ) : (
    <NativeBaseProvider>
      <View style={styles.container}>
        <FlatList
          data={news}
          renderItem={({item}) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'gray.600',
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2">
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="50px"
                  source={{
                    uri: item.urlToImage,
                  }}
                />
                <VStack style={{width: '80%'}}>
                  <Text
                    style={styles.Title}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold>
                    {item.title}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start">
                  {item.shehab}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={item => item.title}
          refreshing={isLoading}
          onRefresh={GetNewsFromApi}
        />
      </View>
    </NativeBaseProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
    borderRadius: 6,
  },
  Title: {
    fontSize: 15,
  },
});

//make this component available to the app
export default News;
