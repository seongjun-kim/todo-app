import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

type InputHeaderProps = {
  onPressAddButton: (text: string) => void;
};

const InputHeader = ({ onPressAddButton }: InputHeaderProps) => {
  const [todoItem, setTodoItem] = useState("");
  const textInputHandler = (newItem: string) => {
    setTodoItem(newItem);
  };
  const addButtonHandler = () => {
    onPressAddButton(todoItem);
    setTodoItem("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="add what to do ..."
        autoCorrect={false}
        value={todoItem}
        onChangeText={textInputHandler}
      />
      <TouchableOpacity style={styles.button} onPress={addButtonHandler}>
        <Icon name="plussquareo" color="black" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  input: {
    flex: 1,
    fontSize: 25,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  button: {
    padding: 5,
    marginLeft: 10,
  },
});

export default InputHeader;
