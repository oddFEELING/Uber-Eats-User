import { StyleSheet } from 'react-native';

// ======= styles -->
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  container: {
    margin: 10,
  },

  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },

  imageIcon: {
    position: 'absolute',
    top: 40,
    left: 10,
  },

  title: {
    fontSize: 33,
    fontWeight: '700',
    marginVertical: 10,
  },

  subTitle: {
    color: 'gray',
    fontSize: 15,
  },

  menuTitle: {
    marginVertical: 10,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.7,
  },
});

export default styles;
