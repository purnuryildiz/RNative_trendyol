//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import appColors from '../theme/colors';
import WidgetTitle from '../components/widgets/widgetTitle';
import ProductItem from '../components/products/productItem';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../store/actions/productsActions';

// create a component
const ForYou = ({item}) => {
  const {forYouProducts} = useSelector(state => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProducts({
        limit: 4,
        category: 'jewelery',
      }),
    );
  }, []);
  return (
    <View style={styles.container}>
      <WidgetTitle
        title={item.title}
        seeAll={item.seeAll}
        category="jewelery"
      />

      {
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}
          data={forYouProducts}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      }
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: appColors.WHITE,
  },
});

//make this component available to the app
export default ForYou;
