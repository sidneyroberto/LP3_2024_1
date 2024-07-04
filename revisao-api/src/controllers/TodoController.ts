import { Request, Response } from "express";
import TodoDAO from "../daos/TodoDAO";
import { TodoModel, validateTodoInputs } from "../domains/TodoModel";

export default class TodoController {
  private todoDAO: TodoDAO;

  constructor() {
    this.todoDAO = new TodoDAO();
  }

  async save(req: Request, res: Response) {
    const errorMessages = validateTodoInputs(req.body);

    if (errorMessages.length === 0) {
      const { description, deadline } = req.body;

      const todo = new TodoModel({
        description,
        deadline: new Date(deadline),
      });

      const savedTodo = await this.todoDAO.save(todo);
      return res.status(201).json({ todo: savedTodo });
    }

    return res.status(400).json({ errorMessages });
  }
}
