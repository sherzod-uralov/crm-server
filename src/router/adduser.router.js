import { Router } from "express";
import { fsRead } from "../libs/fs.helper.js";
import { addPost } from "../controller/addpost.controller.js";
export const addrouter = Router();

addrouter.post('/addpost',addPost);
addrouter.get('/addpost',(req,res) => {
    try {
        const readData = JSON.parse(fsRead('/src/db/users.json'));
        res.status(200).json({
            status:200,
            data: readData,
            msg: "success"
        })
    } catch (error) {
        res.send('error')
    }
})