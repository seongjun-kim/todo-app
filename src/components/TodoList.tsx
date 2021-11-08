import React from "react";
import { FlatList } from "react-native";
import { TodoListItem, TodoListItemProps } from "./TodoListItem";

type TodoListProps = {
  data: TodoListItemProps[];
  onPressRemoveButton: (id: string) => void;
};

export const TodoList = ({ data, onPressRemoveButton }: TodoListProps) => {
  const renderItem = ({ item }: { item: TodoListItemProps }) => (
    <TodoListItem {...item} onRemove={onPressRemoveButton} />
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
