import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const OrderListItem = ({ order }) => {
  const navigator = useNavigation();

  return (
    <Pressable
      style={{ paddingHorizontal: 10 }}
      onPress={() => navigator.navigate('Order')}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: order.Restaurant.image }}
          style={styles.resImage}
        />
        <View>
          <Text style={styles.name}>{order.Restaurant.name}</Text>
          <Text style={styles.middletext}>3 items &#8226; $30.32</Text>
          <Text style={styles.lastText}>2 days ago &#8226; {order.status}</Text>
        </View>
      </View>

      {/* ====== separator */}
      <View style={styles.separator} />
    </Pressable>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
  },

  resImage: {
    width: 75,
    aspectRatio: 1,
    marginRight: 10,
  },

  name: {
    fontWeight: '600',
    fontSize: 16,
  },

  middletext: {
    marginVertical: 5,
  },

  lastText: {
    color: 'gray',
  },

  separator: {
    height: 1,
    wudth: '100%',
    backgroundColor: 'lightgray',
    marginVertical: 5,
  },
});
