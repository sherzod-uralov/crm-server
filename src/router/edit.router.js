import { Router } from "express";
import { editUser } from "../controller/edit.controller.js";
import { editMiddleware } from "../middleware/edit.middleware.js";
export const editRouter = Router();

editRouter.put('/edit/:id',editUser);
