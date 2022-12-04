import React from 'react';
import styles from './style';
import RestaurantHeader from './Header.js';
import { View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import restaurants from '../../../assets/data/restaurants.json';
import { useRoute, useNavigation } from '@react-navigation/native';

const restaurant = restaurants[2];

const RestaurantDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />

      <Ionicons
        name='arrow-back-circle'
        size={50}
        color='white'
        style={styles.imageIcon}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;

// 525252
