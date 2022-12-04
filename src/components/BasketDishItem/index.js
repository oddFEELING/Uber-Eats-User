import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const BasketDishItem = ({ basketDish }) => {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.quantityContainer}>
          <Text>1</Text>
        </View>
        <Text style={styles.dishName}>{basketDish.name}</Text>
        <Text style={styles.price}>${basketDish.price}</Text>
      </View>

      {/* ====== separator */}
      <View style={styles.separator} />
    </View>
  );
};

export default BasketDishItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
  },

  dishName: {
    fontWeight: 'bold',
    marginLeft: 20,
  },

  price: {
    marginLeft: 'auto',
  },

  quantityContainer: {
    backgroundColor: 'lightgray',
    width: 23,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
