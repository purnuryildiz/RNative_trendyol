//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTS} from '../utils/routes';

// create a component
const Introduction = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <WidgetTitle seeAll={item.seeAll} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Pressable onPress={() => navigation.navigate(PRODUCTS)}>
          <Image
            source={{
              uri: 'https://cdn.dsmcdn.com/ty1606/pimWidgetApi/mobile_20241123141726_3205009KadinMobile202411211404.jpg',
            }}
            style={{
              width: 500,
              height: 200,
              resizeMode: 'contain',
              borderRadius: 10,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Introduction;
