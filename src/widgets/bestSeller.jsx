//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import appColors from '../theme/colors';
import WidgetTitle from '../components/widgets/widgetTitle';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';
import Spinner from '../components/ui/spinner';
import {getProducts} from '../store/actions/productsActions';

// create a component
const BestSeller = ({item}) => {
  const {bestSellerProducts} = useSelector(state => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProducts({
        limit: 4,
        category: "women's clothing",
      }),
    );
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle
        title={item.title}
        seeAll={item.seeAll}
        category="women's clothing"
      />

      {
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}
          data={bestSellerProducts}
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
export default BestSeller;
