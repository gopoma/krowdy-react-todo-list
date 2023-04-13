import { useState } from "react";
import {
	Box,
	Button,
	Dialog,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from "@mui/material";
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

import { useTodos } from "./hooks";
import { TodoStatus, todosConfig } from "./constants";
import { TodoForm } from "./components";


export default function Todos () {
	const {
		todos,
		addTodo,
		rotateTodoStatus,
		updateTodo,
		deleteTodo
	} = useTodos();
	const [isOpen, setIsOpen] = useState(false);
	const [currentEditableTodo, setCurrentEditableTodo] = useState();

	const _handleClose = () => {
		setIsOpen(false);
	};

	const _handleClickOpenTodoFormCreate = () => {
		setIsOpen(true);
	};

	const _handleClickOpenTodoFormEdit = (todo) => () => {
		setIsOpen(true);
		setCurrentEditableTodo(todo);
	};

	const _handleClickDeleteTodo = (todo) => () => {
		deleteTodo(todo.id);
	};

	const _handleSubmit = (todo) => {
		if (todo.id) {
			updateTodo(todo);
		} else {
			addTodo({
				...todo,
				id: uuidv4(),
				status: TodoStatus.PENDING
			});
		}

		setIsOpen(false);
		setCurrentEditableTodo(null);
	};

	return (
		<section>
			<Box display="flex" justifyContent="flex-end">
				<Button
					startIcon={<AddIcon />}
					onClick={_handleClickOpenTodoFormCreate}
					variant="contained"
				>
                    Agregar Tarea
				</Button>
			</Box>
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="right">#</TableCell>
							<TableCell align="right">Nombre de tarea</TableCell>
							<TableCell align="right">Estado</TableCell>
							<TableCell align="right">Seleccionado</TableCell>
							<TableCell align="right">Acciones</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{todos.map((todo) => {
							const todoConfig = todosConfig[todo.status];

							return (
								<TableRow
									key={todo.id}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0
										}
									}}
								>
									<TableCell component="th" scope="row">
										{todo.id}
									</TableCell>
									<TableCell align="right">
										{todo.title}
									</TableCell>
									<TableCell align="right">
										<Button
											sx={{
												backgroundColor: todoConfig.color,
												color: "#FFFFFF",
												"&:hover": {
													backgroundColor: todoConfig.hover
												}
											}}
											onClick={() => rotateTodoStatus(todo.id)}
										>
											{todoConfig.label}
										</Button>
									</TableCell>
									<TableCell align="right">{}</TableCell>
									<TableCell align="right">
										<IconButton
											size="small"
											onClick={_handleClickOpenTodoFormEdit(todo)}
										>
											<EditIcon fontSize="small" />
										</IconButton>
										<IconButton
											size="small"
											onClick={_handleClickDeleteTodo(todo)}
										>
											<DeleteIcon fontSize="small" />
										</IconButton>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<Dialog
				open={isOpen}
				onClose={_handleClose}
				PaperProps={{ sx: { width: "100vw" } }}
			>
				<TodoForm onSubmit={_handleSubmit} todo={currentEditableTodo} />
			</Dialog>
		</section>
	);
}
