//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import appColors from '../../theme/colors';
import widgets from '../../widgets/widgets.json';
import Categories from '../../widgets/categories';
import BestSeller from '../../widgets/bestSeller';
import ForYou from '../../widgets/forYou';
import screenStyle from '../../styles/screenStyle';
import Introduction from '../../widgets/introduction';
// create a component
const HomeScreen = () => {
  const widgetItem = ({item}) => {
    switch (item.name) {
      case 'categories':
        return <Categories item={item} />;
      case 'introduction':
        return <Introduction item={item} />;
      case 'bestSeller':
        return <BestSeller item={item} />;
      case 'forYou':
        return <ForYou item={item} />;
    }
  };

  return (
    <View style={screenStyle.container}>
      <FlatList data={widgets} renderItem={widgetItem} />
    </View>
  );
};

//make this component available to the app
export default HomeScreen;
