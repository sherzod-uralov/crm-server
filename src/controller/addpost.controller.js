import { json } from 'express';
import {fsRead,fsWrite} from '../libs/fs.helper.js'

const addPost = (req,res) => {
    try {
        const {name,surname,uniqueid,cardnum} = req.body;
        const userData = JSON.parse(fsRead('/src/db/users.json'));
        userData.push({
            id: userData.at(-1)?.id + 1 || 1,
            name,
            surname,
            cardnum,
            uniqueid,
            money:[]
        });
        fsWrite('/src/db/users.json',userData);
        res.status(200).json({
            status:200,
            msg:'added post'
        });
    } catch (error) {
        res.send(error.message);
    }
}

export {addPost}