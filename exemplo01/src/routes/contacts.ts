import { Router } from "express";
import ContactController from "../controllers/ContactController";

const contactsRouter = Router();
const contactCtrl = new ContactController();

contactsRouter.post("/", (req, res) => contactCtrl.save(req, res));
contactsRouter.get("/name/:name", (req, res) =>
  contactCtrl.findByName(req, res),
);

export default contactsRouter;
