//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigator from './src/router/rootNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

//make this component available to the app
export default App;
