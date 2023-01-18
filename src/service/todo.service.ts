import { TodoInput } from "./../model/todo.model";
import { TodoModel as Todo } from "../model";
class TodoService {
  constructor() {}

  public async getAllTodo() {
    const todos = await Todo.findAll();
    return todos;
  }

  public async createTodo(payload: TodoInput) {
    const createTodo = await Todo.create(payload);

    return createTodo;
  }
}

export default TodoService;
