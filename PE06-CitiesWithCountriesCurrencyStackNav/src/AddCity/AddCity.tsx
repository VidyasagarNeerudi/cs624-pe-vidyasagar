import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../components/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Types
type Location = {
  name: string;
  coordinates: number[];
};

type City = {
  id: string;
  city: string;
  country: string;
  locations: Location[];
};

type AddCityProps = {
  addCity: (city: City) => void;
  navigation: NativeStackNavigationProp<any>;
};

// Component
const AddCity: React.FC<AddCityProps> = ({ addCity, navigation }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  // Only allow letters and spaces
  const isValidInput = (text: string) => /^[a-zA-Z\s]+$/.test(text);

  const handleSubmit = () => {
    if (!city.trim() || !country.trim()) {
      Alert.alert('Incomplete Form', 'Please fill in both fields.');
      return;
    }

    if (!isValidInput(city) || !isValidInput(country)) {
      Alert.alert('Invalid Input', 'Only letters and spaces are allowed.');
      return;
    }

    const newCity: City = {
      id: String(uuid.v4()),
      city: city.trim(),
      country: country.trim(),
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
        autoCapitalize="words"
        returnKeyType="next"
      />
      <TextInput
        placeholder="Country name"
        value={country}
        onChangeText={setCountry}
        style={styles.input}
        autoCapitalize="words"
        returnKeyType="done"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add City</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const baseInput = {
  borderRadius: 8,
  paddingHorizontal: 12,
  height: 50,
  fontSize: 16,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    ...baseInput,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  button: {
    ...baseInput,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AddCity;
