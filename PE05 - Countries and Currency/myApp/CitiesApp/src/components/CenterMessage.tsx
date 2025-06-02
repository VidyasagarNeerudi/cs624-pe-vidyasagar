import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from './theme';

type Props = {
  message: string;
};

const CenterMessage: React.FC<Props> = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.message}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  message: {
    fontSize: 20,
    color: '#444',
    textAlign: 'center',
  },
});

export default CenterMessage;