import { Router } from "express";
import { editpost } from "../controller/edit.controller.js";
export const editPostRouter = Router();

editPostRouter.get('/edit/:id',editpost);

