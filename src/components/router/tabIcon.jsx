//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  CART,
  FAVORITES,
  HOMESCREEN,
  PROFILE,
  TRENDYOLGO,
} from '../../utils/routes';
import {
  Autonio,
  Heart,
  Home,
  Profile,
  ShoppingCart,
} from 'iconsax-react-native';

// create a component
const TabIcon = ({name, size, color, focused}) => {
  switch (name) {
    case HOMESCREEN:
      return (
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case TRENDYOLGO:
      return (
        <Autonio
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case FAVORITES:
      return (
        <Heart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case CART:
      return (
        <ShoppingCart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case PROFILE:
      return (
        <Profile
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
  }
};

export default TabIcon;
