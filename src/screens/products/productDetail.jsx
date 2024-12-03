import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import screenStyle from '../../styles/screenStyle';
import {getProductInfo} from '../../store/actions/productsActions';
import Spinner from '../../components/ui/spinner';
import {screenHeight, screenWidth} from '../../utils/constants';
import appColors from '../../theme/colors';
import {Star, ShoppingCart} from 'iconsax-react-native';
import {convertPrice} from '../../utils/functions';

const ProductDetail = ({route}) => {
  const productID = route?.params?.productID;
  const {pendingDetail, productInfo} = useSelector(state => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productID) {
      dispatch(getProductInfo({id: productID}));
    }
  }, [productID]);

  return (
    <View style={screenStyle.container}>
      {pendingDetail ? (
        <View style={styles.loaderContainer}>
          <Spinner />
          <Text style={styles.loaderText}>Ürün detayları yükleniyor...</Text>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <ScrollView>
            {/* Product Image */}
            <Image source={{uri: productInfo.image}} style={styles.image} />

            {/* Product Info */}
            <View style={styles.infoContainer}>
              <View style={styles.headerContainer}>
                <View style={styles.titleCategoryContainer}>
                  <Text style={styles.title}>{productInfo.title}</Text>
                  <Text style={styles.category}>{productInfo.category}</Text>
                </View>
                {/* Rating */}
                <View style={styles.rateContainer}>
                  <Star size="18" color={appColors.YELLOW} variant="Bold" />
                  <Text style={styles.rate}>{productInfo.rating.rate}</Text>
                </View>
              </View>

              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={styles.description}>
                {productInfo.description}
              </Text>
              <TouchableOpacity>
                <Text style={styles.readMore}>Daha Fazla</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                {convertPrice(productInfo.price)}
              </Text>
              <Text style={styles.freeShipping}>Kargo Bedava</Text>
            </View>
            <TouchableOpacity style={styles.nowBuyButton}>
              <Text style={styles.nowBuyButtonText}>Şimdi Al</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText}>Sepete Ekle</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 450,
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: appColors.GRAY,
  },
  image: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.5,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: appColors.BLACK,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  infoContainer: {
    padding: 10,
    backgroundColor: appColors.WHITE,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: appColors.GRAY,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleCategoryContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: appColors.PRIMARY,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  category: {
    fontSize: 16,
    color: appColors.GRAY,
    fontStyle: 'italic',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.LIGHT_YELLOW,
    borderRadius: 10,
    padding: 8,
  },
  rate: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '600',
    color: appColors.DARK_YELLOW,
  },
  description: {
    fontSize: 16,
    color: appColors.DARK_GRAY,
    lineHeight: 24,
    marginBottom: 10,
  },
  readMore: {
    color: appColors.PRIMARY,
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: appColors.LIGHT_GRAY,
    backgroundColor: appColors.WHITE,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: appColors.BLACK,
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: appColors.RED,
    textTransform: 'uppercase',
  },
  freeShipping: {
    fontSize: 12,
    color: appColors.GREEN,
    marginTop: 2,
    fontStyle: 'italic',
  },
  nowBuyButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: appColors.RED,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: appColors.WHITE,
    shadowColor: appColors.BLACK,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  nowBuyButtonText: {
    color: appColors.RED,
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: appColors.PRIMARY,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 5,
    shadowColor: appColors.BLACK,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  addToCartButtonText: {
    color: appColors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetail;
