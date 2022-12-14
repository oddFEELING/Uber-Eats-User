import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [lat, setLat] = useState('0');
  const [lng, setLng] = useState('0');

  const onSave = () => {};

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder='Name'
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder='Address'
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder='Latitude'
        style={styles.input}
        keyboardType='numeric'
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder='Longitude'
        style={styles.input}
      />
      <Button onPress={onSave} title='Save' style={{ margin: 10 }} />
      <Text
        style={{ textAlign: 'center', color: 'red', fontSize: 20 }}
        onPress={() => Auth.signOut()}
      >
        Sign Out
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
});

export default ProfileScreen;
