import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

import { useTodos, todosConfig, TodoForm } from "./todos";

export default function App() {
  const { todos, addTodo } = useTodos();
  const [isOpen, setIsOpen] = useState(false);

  const _handleClose = () => {
    setIsOpen(false);
  };

  const _handleClickOpentodoForm = () => {
    setIsOpen(true);
  };

  const _handleSubmit = (newTodo) => {
    if (newTodo.id) {
    } else {
      addTodo(newTodo);
    }

    setIsOpen(false);
  };

  return (
    <div>
      <Box display="flex" justifyContent="flex-end">
        <Button startIcon={<AddIcon />} onClick={_handleClickOpentodoForm}>
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
            {todos.map((row) => {
              const todoConfig = todosConfig[row.status];

              return (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{
                        backgroundColor: todoConfig.color,
                        color: "#FFFFFF"
                      }}
                    >
                      {todoConfig.label}
                    </Button>
                  </TableCell>
                  <TableCell align="right">{}</TableCell>
                  <TableCell align="right">{}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={isOpen} onClose={_handleClose}>
        <TodoForm onSubmit={_handleSubmit} />
      </Dialog>
    </div>
  );
}
