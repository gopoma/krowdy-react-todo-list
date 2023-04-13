import { useState, useEffect } from "react";

import { TodoStatusArray } from "../constants";

// Immediately Invoked Function Expression (IIFE)
const initialTodos = (() => {
	const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos")) ?? [];
	return [...todosFromLocalStorage];
})();

export default function useTodos() {
	const [todos, setTodos] = useState(initialTodos);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTodo = (newTodo) => {
		const todosWithAddedOne = [newTodo, ...todos];

		setTodos(todosWithAddedOne);
	};

	const rotateTodoStatus = (idTodo) => {
		const todosWithEditedOne = todos.map((todo) => {
			if(todo.id !== idTodo) {
				return todo;
			}

			const currentTodoStatusIndex = TodoStatusArray.findIndex((todoStatus) => todoStatus === todo.status);
			const status = TodoStatusArray[(currentTodoStatusIndex + 1) % TodoStatusArray.length];

			return {
				...todo,
				status
			};
		});

		setTodos(todosWithEditedOne);
	};

	const updateTodo = (updatedTodo) => {
		const todosWithUpdatedOne = todos.map((todo) => {
			if(todo.id !== updatedTodo.id) {
				return todo;
			}

			return {
				...todo,
				...updatedTodo
			};
		});

		setTodos(todosWithUpdatedOne);
	};

	const deleteTodo = (idTodo) => {
		const todosWithDeletedOne = todos.filter((todo) => todo.id !== idTodo);

		setTodos(todosWithDeletedOne);
	};

	const toggleCheckTodo = (idTodo) => {
		const todosWithCheckedOne = todos.map((todo) => {
			if(todo.id !== idTodo) {
				return todo;
			}

			return {
				...todo,
				checked: !todo.checked
			};
		});

		setTodos(todosWithCheckedOne);
	};

	const deleteCheckedTodos = () => {
		const todosWithoutCheckedOnes = todos.filter((todo) => !todo.checked);

		setTodos(todosWithoutCheckedOnes);
	};

	return {
		todos,
		addTodo,
		rotateTodoStatus,
		updateTodo,
		deleteTodo,
		toggleCheckTodo,
		deleteCheckedTodos
	};
}
