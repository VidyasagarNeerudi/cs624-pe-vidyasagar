import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define City type
type City = {
  id: string;
  city: string;
  country: string;
};

// Define Props type
type Props = {
  cities: City[];
  navigation: NativeStackNavigationProp<any>;
};

export default function Cities({ cities, navigation }: Props) {
  return (
    <View style={styles.container}>
      {cities.length === 0 ? (
        <Text style={styles.centerMessage}>No saved cities!</Text>
      ) : (
        <FlatList
          data={cities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate('City', { city: item })} style={styles.cityContainer}>
              <Text style={styles.city}>{item.city}</Text>
              <Text style={styles.country}>{item.country}</Text>
            </Pressable>
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
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  centerMessage: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
  },
  cityContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#007AFF',
  },
  city: {
    fontSize: 20,
    fontWeight: '600',
  },
  country: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .5)',
  },
});
