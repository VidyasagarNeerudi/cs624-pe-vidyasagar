import React, { useState, createContext, useContext, lazy, Suspense } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

// Lazy-loaded screens
const Cities = lazy(() => import('../../src/Cities/Cities'));
const AddCity = lazy(() => import('../../src/AddCity/AddCity'));
const AddCountry = lazy(() => import('../../src/AddCountry/AddCountry'));
const Countries = lazy(() => import('../../src/Countries/Countries'));
const Country = lazy(() => import('../../src/Countries/Country'));
const Currency = lazy(() => import('../../src/Countries/Currency'));

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Create contexts
const CitiesContext = createContext();
const CountriesContext = createContext();

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const addCity = (city) => setCities((prevCities) => [...prevCities, city]);

  return <CitiesContext.Provider value={{ cities, addCity }}>{children}</CitiesContext.Provider>;
}

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const addCountry = (country) => setCountries((prevCountries) => [...prevCountries, country]);

  return <CountriesContext.Provider value={{ countries, addCountry }}>{children}</CountriesContext.Provider>;
}

// Cities Stack
function CitiesStackScreen() {
  const { cities } = useContext(CitiesContext);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities">{(props) => <Cities {...props} cities={cities} />}</Stack.Screen>
    </Stack.Navigator>
  );
}

// Countries Stack
function CountriesStackScreen() {
  const { countries } = useContext(CountriesContext);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Countries">
        {(props) => <Countries {...props} countries={countries} />}
      </Stack.Screen>
      <Stack.Screen name="Country">
        {(props) => <Country {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Currency">
        {(props) => <Currency {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

// Bottom Tabs
function AppTabs() {
  const { addCity, cities } = useContext(CitiesContext);
  const { addCountry } = useContext(CountriesContext);

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Tab.Navigator>
        <Tab.Screen name="Cities">{(props) => <CitiesStackScreen {...props} cities={cities} />}</Tab.Screen>
        <Tab.Screen name="Add City">{(props) => <AddCity {...props} addCity={addCity} />}</Tab.Screen>
        <Tab.Screen name="Add Country">{(props) => <AddCountry {...props} addCountry={addCountry} />}</Tab.Screen>
        <Tab.Screen name="CountriesNav">{(props) => <CountriesStackScreen {...props} />}</Tab.Screen>
      </Tab.Navigator>
    </Suspense>
  );
}

// App Entry
export default function Index() {
  return (
    <CitiesProvider>
      <CountriesProvider>
        <AppTabs />
      </CountriesProvider>
    </CitiesProvider>
  );
}
