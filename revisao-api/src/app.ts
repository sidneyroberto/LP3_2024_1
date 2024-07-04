import express from "express";
import cors from "cors";
import logger from "morgan";

import { connectToDB } from "./config/db";
import { todosRouter } from "./routes/todos";

connectToDB();

export const app = express();

// Configuraçao de middlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/todos", todosRouter);
