import { Router } from "express";
import { payuser } from "../controller/pay.account.js";
export const payRouter = Router();

payRouter.put('/pay',payuser);
