import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import uuid from 'react-native-uuid';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define City type
type City = {
  id: string;
  city: string;
  country: string;
  locations: { name: string; coordinates: number[] }[];
};

// Props definition
type Props = {
  addCity: (city: City) => void;
  navigation: NativeStackNavigationProp<any>;
};

export default function AddCity({ addCity, navigation }: Props) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = () => {
    if (!city.trim() || !country.trim()) {
      Alert.alert('Incomplete Form', 'Please fill in both fields.');
      return;
    }

    const newCity: City = {
      id: uuid.v4() as string,
      city,
      country,
      locations: [],
    };

    addCity(newCity);
    setCity('');
    setCountry('');
    navigation.navigate('Cities');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a City</Text>
      <TextInput 
        placeholder="City name" 
        value={city} 
        onChangeText={setCity} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Country name" 
        value={country} 
        onChangeText={setCountry} 
        style={styles.input} 
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Add City</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  button: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});
