import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const TodoListItem = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.completeCircle}>
          <Icon name="circledowno" size={30} color="green" />
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, styles.strikeText]}>item text</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text>
          <Icon name="delete" size={30} color="red" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    flex: 5,
    fontSize: 20,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderColor: "blue",
    borderWidth: 2,
    marginHorizontal: 10,
  },
  completeCircle: {
    marginHorizontal: 10,
  },
  strikeText: {
    color: "#bbb",
    textDecorationLine: "line-through",
  },
  unstrikeText: {
    color: "#29323c",
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
});

export default TodoListItem;
