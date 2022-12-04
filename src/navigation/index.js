import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// ======= Screen imports -->
import BasketScreen from '../screens/BasketScreen';
import HomeScreen from '../screens/HomeScreen';
import DishDetailScreen from '../screens/DishDetailScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailScreen from '../screens/OderDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';

// ======= icons import -->
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name='HomeTabs' component={HomeTabs} />
  </Stack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator barStyle={{ backgroundColor: 'white' }} style>
    <Tab.Screen
      name='Home'
      component={HomeStackNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <Foundation name='home' size={24} color={color} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name='OrdersHome'
      component={OrderStackNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name='list-alt' color={color} size={24} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name='Profile'
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name='user-alt' color={color} size={24} />
        ),
      }}
    ></Tab.Screen>
  </Tab.Navigator>
);

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Restaurants' component={HomeScreen} />
    <HomeStack.Screen
      name='Restaurant'
      component={RestaurantDetailsScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen name='Dish' component={DishDetailScreen} />
    <HomeStack.Screen name='Basket' component={BasketScreen} />
  </HomeStack.Navigator>
);

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => (
  <OrderStack.Navigator>
    <OrderStack.Screen name='Orders' component={OrdersScreen} />
    <OrderStack.Screen name='Order' component={OrderDetailScreen} />
  </OrderStack.Navigator>
);

export default RootNavigator;
