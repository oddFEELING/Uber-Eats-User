import React from 'react';
import styles from './style';
import { View, Text, Image } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          $ {restaurant.deliveryFee} &8226; {restaurant.minDeliveryTime} -
          {restaurant.maxDeliveryTime} mins
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;

// 525252
