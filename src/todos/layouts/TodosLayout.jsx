import { Box } from "@mui/material";

export const TodosLayout = ({ children }) => {
	return (
		<Box className="animate__animated animate__fadeIn animate__faster">
			<Box component="main">{children}</Box>
		</Box>
	);
};
