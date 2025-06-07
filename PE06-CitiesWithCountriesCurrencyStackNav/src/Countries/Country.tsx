import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface CountryDetails {
  name: string;
  currency: string;
  population?: number;
  capital?: string;
}

interface CountryProps {
  route: {
    params: {
      country: CountryDetails;
    };
  };
  navigation: any;
}

const Country: React.FC<CountryProps> = ({ route, navigation }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{country.name}</Text>

      <View style={styles.infoSection}>
        {country.capital && (
          <InfoRow label="Capital" value={country.capital} />
        )}
        {country.population && (
          <InfoRow
            label="Population"
            value={country.population.toLocaleString()}
          />
        )}
        <InfoRow label="Currency" value={country.currency} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="View Currency Info"
          onPress={() =>
            navigation.navigate('Currency', {
              countryName: country.name,
              currency: country.currency,
            })
          }
          color="#1e88e5"
        />
      </View>
    </View>
  );
};

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#3f51b5',
    textAlign: 'center',
  },
  infoSection: {
    marginBottom: 36,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  label: {
    fontSize: 18,
    color: '#555',
    width: 110,
  },
  value: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1e88e5',
    flexShrink: 1,
  },
  buttonContainer: {
    marginTop: 12,
    alignSelf: 'center',
    width: '80%',
  },
});

export default Country;
