import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { todos as todosMock, TodoStatus } from "../";

export default function useTodos() {
  const [todos, setTodos] = useState(todosMock);

  const addTodo = (newTodo) => {
    setTodos([
      {
        ...newTodo,
        id: uuidv4(),
        status: TodoStatus.PENDING
      },
      ...todos
    ]);
  };

  return {
    todos,
    addTodo
  };
}
