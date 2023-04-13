import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "animate.css";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<TodoApp />
	</StrictMode>
);
