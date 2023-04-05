import { Button, Paper, TextField } from "@mui/material";

import { useForm } from "../../hooks";

const initialTodoFormState = {
	title: "",
	description: ""
};

export default function TodoForm({ onSubmit }) {
	const { title, description, formState, _handleChange } =
		useForm(initialTodoFormState);

	const _handleSubmit = (event) => {
		event.preventDefault();

		onSubmit(formState);
	};

	return (
		<Paper>
			<form onSubmit={_handleSubmit}>
				<TextField
					onChange={_handleChange}
					name="title"
					placeholder="Escribe nombre de tarea"
					value={title}
				/>
				<TextField
					onChange={_handleChange}
					name="description"
					placeholder="Escribe descripción"
					value={description}
				/>
				<Button type="submit">Guardar</Button>
			</form>
		</Paper>
	);
}
