import { useMemo, useState } from "react";
import {
	Box,
	Button,
	Checkbox,
	Dialog,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from "@mui/material";
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

import { useTodos } from "../hooks";
import { TodoStatus, todosConfig } from "../constants";
import { TodoForm } from "../components";


export default function TodosView() {
	const {
		todos,
		addTodo,
		rotateTodoStatus,
		updateTodo,
		deleteTodo,
		toggleCheckTodo,
		deleteCheckedTodos
	} = useTodos();
	const [isOpen, setIsOpen] = useState(false);
	const [currentEditableTodo, setCurrentEditableTodo] = useState();

	const hasCheckedTodos = useMemo(() => {
		const result = todos.some((todo) => todo.checked);

		return result;
	}, [todos]);

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

	const _handleRotateTodoStatus = (todo) => () => {
		rotateTodoStatus(todo.id);
	};

	const _handleToggleCheckTodo = (todo) => () => {
		toggleCheckTodo(todo.id);
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

	const _handleClickDeleteCheckedTodos = () => {
		deleteCheckedTodos();
	};

	return (
		<Box
			component="section"
			padding={1.5}
			display="flex"
			flexDirection="column"
			gap={1.5}
		>
			<Box
				component="header"
				display="flex"
				justifyContent="center"
				gap={1.5}
			>
				<Typography
					variant="h1"
					component="h1"
					fontSize={40}
					fontWeight="bold"
				>
					todo.it
				</Typography>
				<Button
					startIcon={<AddIcon />}
					onClick={_handleClickOpenTodoFormCreate}
					variant="contained"
				>
                    Agregar Tarea
				</Button>
			</Box>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
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
									hover
									selected={todo.checked}
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
											onClick={_handleRotateTodoStatus(todo)}
										>
											{todoConfig.label}
										</Button>
									</TableCell>
									<TableCell align="right">
										<Checkbox
											checked={Boolean(todo.checked)}
											onChange={_handleToggleCheckTodo(todo)}
										/>
									</TableCell>
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
			<IconButton
				size="large"
				sx={{
					display: hasCheckedTodos ? "inline-flex" : "none",
					color: "white",
					backgroundColor: "error.main",
					":hover": {
						backgroundColor: "error.main",
						opacity:0.9
					},
					position: "fixed",
					right: 50,
					bottom: 50
				}}
				onClick={_handleClickDeleteCheckedTodos}
			>
				<DeleteIcon sx={{ fontSize: 30 }}/>
			</IconButton>
			<Dialog
				open={isOpen}
				onClose={_handleClose}
				PaperProps={{ sx: { width: "100vw" } }}
			>
				<TodoForm onSubmit={_handleSubmit} todo={currentEditableTodo} />
			</Dialog>
		</Box>
	);
}
