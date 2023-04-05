export const TodoStatus = {
  COMPLETED: "COMPLETED",
  PENDING: "PENDING",
  DOING: "DOING",
  CANCELLED: "CANCELLED"
};

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
