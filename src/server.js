import express from "express";
import 'dotenv/config';
import {addrouter} from './router/adduser.router.js'
import { userpostMiddleware } from "./middleware/userPost.middleware.js";
import cors from 'cors';
import { editRouter } from "./router/edit.router.js";
import { editPostRouter } from "./router/editPost.router.js";
import { editMiddleware } from "./middleware/edit.middleware.js";
import { payRouter } from "./router/pay.router.js";
function serverRunner() {
    try {
        const app = express();
        app.use(cors())
        app.use(express.json());
        app.use(userpostMiddleware,addrouter);
        app.use(editMiddleware,editRouter)
        app.use(editPostRouter)
        app.use(payRouter)
        app.listen(process.env.PORT, () => console.log('server running on port:'));
    } catch (error) {
        console.log(error);
    }
}

serverRunner()