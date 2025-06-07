import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  // Sample courses data
  const coreCourses = [
    "Course 1: Data Structures",
    "Course 2: Algorithms",
    "Course 3: Database Systems",
    "Course 4: Software Engineering",
    "Course 5: Operating Systems",
    "Course 6: Computer Networks",
    "Course 7: Web Development",
    "Course 8: Mobile App Development",
  ];

  const depthCourses = [
    "Depth Course 1: Machine Learning",
    "Depth Course 2: Cybersecurity",
  ];

  const capstoneCourse = "Capstone Course: Software Project";

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/images/icon.png')} />
      <Text style={styles.title}>MSCS Courses</Text>

      <Text style={styles.subtitle}>Core Courses:</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.courseText}>{course}</Text>
      ))}

      <Text style={styles.subtitle}>Depth of Study Courses:</Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.courseText}>{course}</Text>
      ))}

      <Text style={styles.subtitle}>Capstone Course:</Text>
      <Text style={styles.courseText}>{capstoneCourse}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your favorite course"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />
      <Text style={styles.favoriteText}>Your Favorite Course: {favoriteCourse}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFD580',
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
  },
  courseText: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  favoriteText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default CoreComponents;