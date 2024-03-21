import express from "express";
import dotenv from "dotenv-flow";
import cors from "cors";
import logger from "morgan";
import connectToDB from "./config/db";
import contactsRouter from "./routes/contacts";

/**
 * Carrega as variáveis de ambiente para o
 * contexto da nossa aplicação
 */
dotenv.config();

connectToDB();

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/contacts", contactsRouter);
app.get("/", (req, res) => res.send("Contact Book API"));

export default app;
