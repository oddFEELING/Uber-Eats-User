import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import BasketDishItem from '../../components/BasketDishItem';

const restaurant = restaurants[0];
const dish = restaurant.dishes[0];

const BasketScreen = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name} </Text>
      <Text style={styles.items}>your items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      {/* ====== separator */}
      <View style={styles.separator} />

      <View style={styles.btn}>
        <Text style={styles.btnText}>Create order</Text>
      </View>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 20,
    padding: 10,
  },

  name: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },

  items: {
    color: '#696969',
    marginTop: 20,
    fontSize: 19,
    marginVertical: 10,
    fontWeight: '600',
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },

  quantity: {
    fontSize: 40,
    marginHorizontal: 30,
  },

  btn: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
  },

  btnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
});
