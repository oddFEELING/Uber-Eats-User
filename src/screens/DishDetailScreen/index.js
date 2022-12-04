import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import restaurants from '../../../assets/data/restaurants.json';

const dish = restaurants[0].dishes[2];

const DishDetailScreen = () => {
  const navigator = useNavigation();
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name} </Text>
      <Text style={styles.description}>{dish.description}</Text>

      {/* ====== separator */}
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign
          name='minuscircleo'
          size={35}
          color='#696969'
          onPress={() =>
            setQuantity((current) => (quantity > 0 ? current - 1 : 0))
          }
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name='pluscircleo'
          size={35}
          color='#696969'
          onPress={() => setQuantity((current) => (current += 1))}
        />
      </View>

      <Pressable
        style={styles.btn}
        onPress={() => navigator.navigate('Basket')}
      >
        <Text style={styles.btnText}>
          Add {quantity} to basket &nbsp;&nbsp;&nbsp; $
          {(quantity * dish.price).toFixed(2)}
        </Text>
      </Pressable>
    </View>
  );
};

export default DishDetailScreen;

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

  description: {
    color: '#696969',
  },

  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
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
