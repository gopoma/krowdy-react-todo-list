import { TodoStatus } from "./";

export const todosConfig = {
	[TodoStatus.PENDING]: {
		label: "Pendiente",
		color: "#99757D"
	},
	[TodoStatus.DOING]: {
		status: TodoStatus.DOING,
		label: "En progreso",
		color: "#FFC107"
	},
	[TodoStatus.COMPLETED]: {
		status: TodoStatus.COMPLETED,
		label: "Completado",
		color: "#198754"
	},
	[TodoStatus.CANCELLED]: {
		status: TodoStatus.CANCELLED,
		label: "Cancelado",
		color: "#C94040"
	}
};
