import { Box, Button, TextField } from "@mui/material";

import { useForm } from "../../hooks";

export default function TodoForm({
	todo = {},
	onSubmit = () => {}
}) {
	const {
		title,
		description,
		formState,
		_handleChange
	} = useForm({
		title: todo?.title ?? "",
		description: todo?.description ?? ""
	});

	const _handleSubmit = (event) => {
		event.preventDefault();

		if(!title.trim() || !description.trim()) {
			return;
		}

		onSubmit({
			...todo,
			...formState
		});
	};

	return (
		<Box
			component="form"
			onSubmit={_handleSubmit}
			padding={1.5}
			display="flex"
			flexDirection="column"
			gap={1.5}
		>
			<TextField
				name="title"
				onChange={_handleChange}
				placeholder="Escribe nombre de tarea"
				value={title}
			/>
			<TextField
				name="description"
				onChange={_handleChange}
				placeholder="Escribe descripción"
				value={description}
			/>
			<Button type="submit" variant="contained">Guardar</Button>
		</Box>
	);
}
