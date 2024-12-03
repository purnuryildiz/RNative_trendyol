import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {screenHeight, screenWidth} from '../../utils/constants';
import appColors from '../../theme/colors';
import {Heart, Star1} from 'iconsax-react-native';
import {convertPrice} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';

const ProductItem = ({product}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate(PRODUCTDETAIL, {productID: product.id})
      }>
      {/* Ürün Görseli */}
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{uri: product.image}} />
        <Pressable style={styles.favoriteButton}>
          <Heart size="20" color={appColors.PRIMARY} variant="Outline" />
        </Pressable>
      </View>

      {/* Ürün Başlık */}
      <Text numberOfLines={2} style={styles.title}>
        {product.title}
      </Text>

      {/* Fiyat ve Değerlendirme */}
      <View style={styles.infoContainer}>
        <Text style={styles.price}>{convertPrice(product.price)}</Text>
        <View style={styles.rateContainer}>
          <Star1 size={18} color={appColors.YELLOW} variant="Bold" />
          <Text style={styles.rate}>{product.rating.rate}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth / 2 - 20,
    margin: 8,
    padding: 12,
    borderRadius: 10,
    backgroundColor: appColors.BACKGROUND_LIGHT,
    shadowColor: appColors.GRAY_LIGHT,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 2,
  },
  imageWrapper: {
    position: 'relative',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: appColors.SOFTGRAY,
    marginBottom: 8,
  },
  image: {
    width: screenWidth / 2 - 40,
    height: screenHeight * 0.18,
    resizeMode: 'contain',
  },
  favoriteButton: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: appColors.WHITE,
    padding: 6,
    borderRadius: 20,
    elevation: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: appColors.TEXT_PRIMARY,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: appColors.PRIMARY,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    marginLeft: 5,
    fontSize: 14,
    color: appColors.TEXT_SECONDARY,
  },
});

export default ProductItem;
