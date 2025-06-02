import React, { useState, createContext, useContext, lazy, Suspense } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

// Lazy-loaded components
const Cities = lazy(() => import('../../src/Cities/Cities'));
const AddCity = lazy(() => import('../../src/AddCity/AddCity'));
const AddCountry = lazy(() => import('../../src/AddCountry/AddCountry'));
const Countries = lazy(() => import('../../src/Countries/Countries'));

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Contexts for Cities and Countries
const CitiesContext = createContext();
const CountriesContext = createContext();

// Providers to manage state
export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const addCity = (city) => setCities([...cities, city]);

  return <CitiesContext.Provider value={{ cities, addCity }}>{children}</CitiesContext.Provider>;
}

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const addCountry = (country) => setCountries([...countries, country]);

  return <CountriesContext.Provider value={{ countries, addCountry }}>{children}</CountriesContext.Provider>;
}

// Navigation for Cities
function CitiesStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities" component={Cities} />
    </Stack.Navigator>
  );
}

// Main tab navigation
function AppTabs() {
  const { addCity } = useContext(CitiesContext);
  const { addCountry } = useContext(CountriesContext);

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Tab.Navigator>
        <Tab.Screen name="Cities" component={CitiesStackScreen} />
        <Tab.Screen name="Add City">{() => <AddCity addCity={addCity} />}</Tab.Screen>
        <Tab.Screen name="Add Country">{() => <AddCountry addCountry={addCountry} />}</Tab.Screen>
        <Tab.Screen name="Countries" component={Countries} />
      </Tab.Navigator>
    </Suspense>
  );
}

// Entry point
export default function Index() {
  return (
    <CitiesProvider>
      <CountriesProvider>
        <AppTabs />
      </CountriesProvider>
    </CitiesProvider>
  );
}
