//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../../store/slice/categoriesSlice';
import appColors from '../../theme/colors';
import {MagicStar} from 'iconsax-react-native'; // Daha minimal bir ikon seçtim.

// create a component
const CategoryItem = ({category}) => {
  const dispatch = useDispatch();
  const {selectedCategory} = useSelector(state => state.categories);

  const isActive = selectedCategory === category;

  return (
    <TouchableOpacity
      onPress={() => dispatch(setCategory(category))}
      style={[
        styles.container,
        isActive ? styles.activeCategory : styles.inactiveCategory,
      ]}>
      {isActive && (
        <MagicStar
          size="18"
          color={appColors.WHITE}
          variant="Bold"
          style={styles.icon}
        />
      )}
      <Text style={isActive ? styles.activeText : styles.inactiveText}>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 6,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  activeCategory: {
    backgroundColor: appColors.PRIMARY,
    borderColor: appColors.PRIMARY,
  },
  inactiveCategory: {
    backgroundColor: appColors.SOFTGRAY,
    borderColor: appColors.LIGHTGRAY,
  },
  icon: {
    marginRight: 6,
  },
  activeText: {
    color: appColors.WHITE,
    fontWeight: '600',
    fontSize: 14,
  },
  inactiveText: {
    color: appColors.GRAY,
    fontWeight: '500',
    fontSize: 14,
  },
});

export default CategoryItem;
