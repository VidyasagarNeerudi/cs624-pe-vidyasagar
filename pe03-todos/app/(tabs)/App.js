import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Heading from './Heading';
import CustomButton from './Button';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('ALL');

  const addTodo = () => {
    if (todo.length > 0) {
      const newTodo = { id: Date.now().toString(), task: todo, completed: false };
      setTodos([...todos, newTodo]);
      console.log('Added todo:', todo);
      setTodo('');
    }
  };

  const toggleTodo = id => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = todos.filter(todo =>
    filter === 'ALL' ? true :
    filter === 'COMPLETED' ? todo.completed :
    !todo.completed
  );

  return (
    <View style={styles.container}>
      <Heading title="My To-Do List" />
      <TextInput
        placeholder="Enter a task"
        value={todo}
        onChangeText={setTodo}
        style={styles.input}
      />
      <CustomButton title="Add Todo" onPress={addTodo} />

      <View style={styles.tabs}>
        {['ALL', 'COMPLETED', 'INCOMPLETE'].map(type => (
          <TouchableOpacity key={type} onPress={() => setFilter(type)}>
            <Text style={[styles.tab, filter === type && styles.activeTab]}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredTodos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text
            style={[styles.item, item.completed && styles.completed]}
            onPress={() => toggleTodo(item.id)}
          >
            {item.task}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  input: { borderBottomWidth: 1, marginBottom: 10 },
  item: { padding: 10, fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: 'gray' },
  tabs: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  tab: { padding: 10, fontWeight: 'bold' },
  activeTab: { borderBottomWidth: 2 },
});
