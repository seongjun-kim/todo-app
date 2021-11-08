import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const InputHeader = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="add what to do ..."
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.button}>
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
