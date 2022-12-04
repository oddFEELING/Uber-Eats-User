import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import OrderListItem from '../../components/OrderListItem';
import orders from '../../../assets/data/orders.json';

const OrdersScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Your Orders</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 52,
    width: '100%',
  },

  pageTitle: {
    fontWeight: '600',
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
