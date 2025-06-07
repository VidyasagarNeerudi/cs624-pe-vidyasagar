import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vidyasagar Neerudi</Text>
      <Text style={styles.text}>Masters in Computer Science</Text>
      <Text style={styles.text}>City University of Seattle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow', // Entire background is yellow
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Text is black for contrast
    padding: 10,
    margin: 5,
  },
});

export default App;
