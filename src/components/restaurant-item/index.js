import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Restaurant', { id: restaurant.id });
  };

  const DEFAULT_IMAGE =
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg';
  return (
    <Pressable style={styles.restaurantContainer} onPress={handlePress}>
      <Image
        source={{
          uri: restaurant.image.startsWith('http')
            ? restaurant.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subTitle}>
            $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} -
            {restaurant.maxDeliveryTime} mins
          </Text>
        </View>

        {/* ====== rating */}
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },

  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  subTitle: {
    color: 'grey',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rating: {
    marginLeft: 'auto',
    backgroundColor: 'lightgray',
    width: 35,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default RestaurantItem;
