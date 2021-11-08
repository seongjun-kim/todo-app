import React from "react";
import { FlatList } from "react-native";
import { TodoListItem, TodoListItemProps } from "./TodoListItem";

type TodoListProps = {
  data: TodoListItemProps[];
  onPressRemoveButton: (id: string) => void;
  onPressToggleButton: (id: string) => void;
};

export const TodoList = ({
  data,
  onPressRemoveButton,
  onPressToggleButton,
}: TodoListProps) => {
  const renderItem = ({ item }: { item: TodoListItemProps }) => (
    <TodoListItem
      {...item}
      onRemove={onPressRemoveButton}
      onToggle={onPressToggleButton}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: TodoListItemProps) => item.id}
    />
  );
};

export default TodoList;
