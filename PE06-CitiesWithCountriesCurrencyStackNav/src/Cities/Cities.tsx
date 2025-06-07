import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../components/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Type definitions
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

interface CitiesProps {
  cities: City[];
  navigation: NativeStackNavigationProp<any>;
}

const Cities: React.FC<CitiesProps> = ({ cities, navigation }) => {
  const handleCityPress = (city: City) => {
    navigation.navigate('City', { city });
  };

  const renderCityItem = ({ item }: { item: City }) => (
    <Pressable
      onPress={() => handleCityPress(item)}
      style={styles.cityContainer}
      android_ripple={{ color: colors.primary, borderless: false }}
    >
      <Text style={styles.cityText}>{item.city}</Text>
      <Text style={styles.countryText}>{item.country}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {cities.length === 0 ? (
        <CenterMessage message="No saved cities!" />
      ) : (
        <FlatList
          data={cities}
          keyExtractor={(item) => item.id}
          renderItem={renderCityItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 24,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingBottom: 24,
  },
  cityContainer: {
    paddingVertical: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.primary,
  },
  cityText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primaryText || '#222',
  },
  countryText: {
    fontSize: 15,
    color: colors.secondaryText || 'rgba(0, 0, 0, 0.5)',
    marginTop: 2,
  },
});

export default Cities;
