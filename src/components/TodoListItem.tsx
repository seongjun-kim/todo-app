import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
export interface TodoListItemProps {
  id: string;
  textValue: string;
  checked: boolean;
  onRemove: (id: string) => void;
  onModify: (id: string, text: string) => void;
  onToggle: (id: string) => void;
}

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  id,
  textValue,
  checked,
  onRemove,
  onModify,
  onToggle,
}) => {
  const handleRemove = () => onRemove(id);
  const handleToggle = () => onToggle(id);
  const handleModify = (newTextValue: string) => {
    onModify(id, newTextValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={handleToggle}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Icon name="circledowno" size={30} color="green" />
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
      <TextInput
        style={[styles.text, checked ? styles.strikeText : styles.unstrikeText]}
        autoCorrect={false}
        value={textValue}
        onChangeText={handleModify}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleRemove}>
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
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#ccc",
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
