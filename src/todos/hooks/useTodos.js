import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TodoStatus, TodoStatusArray } from "../constants";
import { todos as todosMock } from "../mocks";

export default function useTodos() {
    const [todos, setTodos] = useState(todosMock);

    const addTodo = (newTodo) => {
        setTodos([
            {
                ...newTodo,
                id: uuidv4(),
                status: TodoStatus.PENDING,
            },
            ...todos,
        ]);
    };

    const rotateTodoStatus = (idTodo) => {
        const todosWithEditedOne = todos.map((todo) => {
            if(todo.id === idTodo) {
                const currentTodoStatusIndex = TodoStatusArray.findIndex((todoStatus) => todoStatus === todo.status);
                const status = TodoStatusArray[(currentTodoStatusIndex + 1) % TodoStatusArray.length];

                return {
                    ...todo,
                    status
                };
            }

            return todo;
        });

        setTodos(todosWithEditedOne);
    };

    return {
        todos,
        addTodo,
        rotateTodoStatus
    };
}
