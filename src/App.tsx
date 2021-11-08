import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import InputHeader from "./components/InputHeader";
import TodoList from "./components/TodoList";
import { TodoListItemProps } from "./components/TodoListItem";

const App = () => {
  const [todoItems, setTodoItems] = useState<TodoListItemProps[]>([]);

  const removeTodo = (id: string) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };
  const addTodo = (text: string) => {
    setTodoItems([
      ...todoItems,
      {
        id: Math.random().toString(),
        textValue: text,
        checked: false,
        onRemove: () => {},
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <View style={styles.body}>
        <InputHeader onPressAddButton={addTodo} />
        <TodoList data={todoItems} onPressRemoveButton={removeTodo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
  },
  title: {
    backgroundColor: "#e3e3e3",
    color: "#333",
    textAlign: "center",
    fontSize: 35,
    marginVertical: 45,
  },
  body: {
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 20,
  },
});

export default App;
