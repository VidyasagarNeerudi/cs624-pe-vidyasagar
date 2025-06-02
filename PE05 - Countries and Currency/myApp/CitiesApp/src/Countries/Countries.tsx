import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Define Country type
type Country = {
  id: string;
  name: string;
  currency: string;
};

// Define Props type
type Props = {
  countries: Country[];
};

export default function Countries({ countries }: Props) {
  return (
    <View style={styles.container}>
      {countries.length === 0 ? (
        <Text style={styles.emptyMessage}>No countries added yet.</Text>
      ) : (
        <FlatList
          data={countries}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.currency}>Currency: {item.currency}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
  },
  card: {
    backgroundColor: '#e8f0fe',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 16,
    color: '#333',
  },
});
