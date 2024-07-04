import { Router } from "express";
import TodoController from "../controllers/TodoController";

export const todosRouter = Router();

const todosCtrl = new TodoController();

// POST /todos
todosRouter.post("/", (req, res) => todosCtrl.save(req, res));
