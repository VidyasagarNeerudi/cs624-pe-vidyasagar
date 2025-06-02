import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import uuid from 'react-native-uuid';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define Country type
type Country = {
  id: string;
  name: string;
  currency: string;
};

// Define Props type
type Props = {
  addCountry: (country: Country) => void;
  navigation: NativeStackNavigationProp<any>;
};

export default function AddCountry({ addCountry, navigation }: Props) {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !currency.trim()) {
      Alert.alert('Incomplete Form', 'Please fill in both fields.');
      return;
    }

    const newCountry: Country = {
      id: uuid.v4() as string,
      name,
      currency,
    };

    addCountry(newCountry);
    setName('');
    setCurrency('');
    navigation.navigate('Countries');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a Country</Text>
      <TextInput 
        placeholder="Country Name" 
        value={name} 
        onChangeText={setName} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Currency" 
        value={currency} 
        onChangeText={setCurrency} 
        style={styles.input} 
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Add Country</Text>
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
    backgroundColor: '#f5f5f5',
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
    borderColor: '#ccc',
    paddingHorizontal: 12,
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
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
