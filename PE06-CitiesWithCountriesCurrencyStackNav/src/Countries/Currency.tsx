import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CurrencyProps {
  route: {
    params: {
      currency: string;
      countryName: string;
    };
  };
}

const Currency: React.FC<CurrencyProps> = ({ route }) => {
  const { currency, countryName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Currency Info</Text>
      <InfoRow label="Country" value={countryName} />
      <InfoRow label="Currency Used" value={currency} isCurrency />
    </View>
  );
};

interface InfoRowProps {
  label: string;
  value: string;
  isCurrency?: boolean;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value, isCurrency }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={isCurrency ? styles.currency : styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5faff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 36,
    color: '#1a237e',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#37474f',
    width: 140,
  },
  value: {
    fontSize: 20,
    color: '#00796b',
    flexShrink: 1,
  },
  currency: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginLeft: 5,
    flexShrink: 1,
  },
});

export default Currency;
