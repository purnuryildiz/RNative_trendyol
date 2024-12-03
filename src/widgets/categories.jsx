//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../store/actions/categorieActions';
import CategoryItem from '../components/widgets/categoryItem';

// create a component
const Categories = ({item}) => {
  const {categories} = useSelector(state => state.categories);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginBottom: -20,
  },
});

//make this component available to the app
export default Categories;
