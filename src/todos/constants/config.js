import { TodoStatus } from "./";

export const todosConfig = {
	[TodoStatus.PENDING]: {
		label: "Pendiente",
		color: "#99757D",
		hover: "#4D393D"
	},
	[TodoStatus.DOING]: {
		status: TodoStatus.DOING,
		label: "En progreso",
		color: "#FFC107",
		hover: "#836200"
	},
	[TodoStatus.COMPLETED]: {
		status: TodoStatus.COMPLETED,
		label: "Completado",
		color: "#198754",
		hover: "#0C4329"
	},
	[TodoStatus.CANCELLED]: {
		status: TodoStatus.CANCELLED,
		label: "Cancelado",
		color: "#C94040",
		hover: "#671D1D"
	}
};
