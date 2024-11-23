import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import {
  CART,
  FAVORITES,
  HOMESCREEN,
  PROFILE,
  TRENDYOLGO,
} from '../utils/routes';
import TrendyolGo from '../screens/trendyolGo';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import TabIcon from '../components/router/tabIcon';
import appColors from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          return (
            <TabIcon
              name={route.name}
              size={size}
              color={color}
              focused={focused}
            />
          );
        },
        tabBarActiveTintColor: appColors.PRIMARY,
        tabBarInactiveTintColor: appColors.GRAY,
      })}>
      <Tab.Screen name={HOMESCREEN} component={HomeScreen} />
      <Tab.Screen name={TRENDYOLGO} component={TrendyolGo} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen name={CART} component={Cart} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
