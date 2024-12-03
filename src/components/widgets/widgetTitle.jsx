//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import appColors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTS} from '../../utils/routes';

// create a component
const WidgetTitle = ({title, seeAll, category}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {seeAll && (
        <TouchableOpacity
          onPress={() => navigation.navigate(PRODUCTS, {category: category})}>
          <Text style={styles.seeAll}>Tümünü Gör </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 20,
  },
  seeAll: {
    fontSize: 14,
    color: appColors.PRIMARY,
  },
});

//make this component available to the app
export default WidgetTitle;
