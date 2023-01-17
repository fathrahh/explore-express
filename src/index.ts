import App from "./app";
import dotEnv from "dotenv";
import TodoController from "./controller/todo.controller";

dotEnv.config();
const app = new App([new TodoController()], Number(process.env.PORT));

app.listen();
