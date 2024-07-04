import { Todo, TodoModel } from "../domains/TodoModel";

// Data Access Object
export default class TodoDAO {
  async save(todo: Todo) {
    const savedTodo = await TodoModel.create(todo);
    return savedTodo;
  }
}
