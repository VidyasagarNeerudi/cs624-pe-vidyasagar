import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import uuid from 'react-native-uuid';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Country {
  id: string;
  name: string;
  currency: string;
}

interface Props {
  addCountry: (country: Country) => void;
  navigation: NativeStackNavigationProp<any>;
}

export default function AddCountry({ addCountry, navigation }: Props) {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const validateInput = (text: string) => /^[a-zA-Z\s]+$/.test(text);

  const handleSubmit = () => {
    if (!validateInput(name) || !validateInput(currency)) {
      alert('Invalid Input: Only letters and spaces are allowed.');
      return;
    }

    if (name.trim() === '' || currency.trim() === '') {
      alert('Incomplete Form: Please fill in both fields.');
      return;
    }

    const newCountry: Country = {
      id: uuid.v4().toString(),
      name,
      currency,
    };

    addCountry(newCountry);
    setName('');
    setCurrency('');
    navigation.navigate('Countries'); // Navigate to Countries tab
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a Country</Text>
      <TextInput
        placeholder="Country Name"
        onChangeText={setName}
        value={name}
        style={styles.input}
        autoCapitalize="words"
      />
      <TextInput
        placeholder="Currency"
        onChangeText={setCurrency}
        value={currency}
        style={styles.input}
        autoCapitalize="words"
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Add Country</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    height: 50,
    borderRadius: 8,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  button: {
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
