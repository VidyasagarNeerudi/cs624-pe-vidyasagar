import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// Type definitions
interface Country {
  id: string;
  name: string;
  currency: string;
  population?: number;
  capital?: string;
}

interface CountriesProps {
  countries: Country[];
  navigation: any;
}

const Countries: React.FC<CountriesProps> = ({ countries, navigation }) => {
  const renderCountry = ({ item }: { item: Country }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Country', { country: item })}
      activeOpacity={0.7}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.currency}>Currency: {item.currency}</Text>
      {/* Optionally display population and capital if available */}
      {item.capital && (
        <Text style={styles.detail}>Capital: {item.capital}</Text>
      )}
      {item.population && (
        <Text style={styles.detail}>Population: {item.population.toLocaleString()}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {countries.length === 0 ? (
        <Text style={styles.empty}>No countries added yet.</Text>
      ) : (
        <FlatList
          data={countries}
          keyExtractor={(item) => item.id}
          renderItem={renderCountry}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafb',
  },
  listContent: {
    paddingBottom: 20,
  },
  empty: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 17,
    color: '#888',
  },
  card: {
    backgroundColor: '#e8f0fe',
    borderRadius: 10,
    padding: 18,
    marginBottom: 12,
    elevation: 2,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1a237e',
  },
  currency: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  detail: {
    fontSize: 15,
    color: '#555',
    marginTop: 2,
  },
});

export default Countries;
