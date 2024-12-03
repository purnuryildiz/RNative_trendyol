import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import {
  ANNOUNCEMENTS,
  CART,
  FAVORITES,
  HOMESCREEN,
  NOTIFICATIONS,
  PROFILE,
  TRENDYOLGO,
} from '../utils/routes';
import TrendyolGo from '../screens/trendyolGo';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import TabIcon from '../components/router/tabIcon';
import appColors from '../theme/colors';
import {Pressable, View} from 'react-native';
import {Notification, Sms} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const navigation = useNavigation();
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
        headerRight: props => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => navigation.navigate(ANNOUNCEMENTS)}
              style={{marginHorizontal: 5}}>
              <Sms size="28" color={appColors.BLACK} />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate(NOTIFICATIONS)}
              style={{marginHorizontal: 5}}>
              <Notification size="28" color={appColors.BLACK} />
            </Pressable>
          </View>
        ),
      })}>
      <Tab.Screen name={HOMESCREEN} component={HomeScreen} />
      <Tab.Screen name={TRENDYOLGO} component={TrendyolGo} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen name={CART} component={Cart} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
