import { DataStore } from 'aws-amplify';
import { Restaurant } from '../../models';
import { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

// ======= component imports -->
import RestaurantItem from '../../components/restaurant-item';

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // prettier-ignore
    DataStore.query(Restaurant)
      .then(setRestaurants);
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
