import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  ANNOUNCEMENTS,
  NOTIFICATIONS,
  PRODUCTDETAIL,
  PRODUCTS,
  TABMENU,
} from '../utils/routes';
import TabNavigator from './tabNavigator';
import Announcements from '../screens/announcements';
import Notifications from '../screens/notifications';
import appColors from '../theme/colors';
import Products from '../screens/products';
import ProductDetail from '../screens/products/productDetail';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: appColors.BLACK,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABMENU}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{}}
        name={ANNOUNCEMENTS}
        component={Announcements}
      />
      <Stack.Screen
        options={{}}
        name={NOTIFICATIONS}
        component={Notifications}
      />
      <Stack.Screen options={{}} name={PRODUCTS} component={Products} />
      <Stack.Screen
        options={{}}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}
