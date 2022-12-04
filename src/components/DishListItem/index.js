import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Dish', { id: dish.is });
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>{dish.price}</Text>
      </View>

      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </Pressable>
  );
};

export default DishListItem;

// ======= styles -->
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },

  name: {
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },

  description: {
    color: 'gray',
    marginVertical: 5,
  },

  price: {
    fontSize: 16,
  },

  image: {
    height: 75,
    aspectRatio: 1,
    marginLeft: 5,
    borderRadius: 10,
  },
});
