import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TABMENU} from '../utils/routes';
import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABMENU}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
}
