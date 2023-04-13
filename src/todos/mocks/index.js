import { TodoStatus } from "../constants";

export const todos = [
	{
		id: "1",
		title: "Comprar chicles",
		description: "",
		status: TodoStatus.COMPLETED
	},
	{
		id: "2",
		title: "Enviar correo",
		description: "",
		status: TodoStatus.PENDING
	},
	{
		id: "3",
		title: "Terminar tarea",
		description: "",
		status: TodoStatus.DOING
	},
	{
		id: "4",
		title: "Redactar un artículo de blog",
		description: "",
		status: TodoStatus.CANCELLED
	}
];
