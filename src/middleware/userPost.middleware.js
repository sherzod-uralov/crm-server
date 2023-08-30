import { fsRead, fsWrite } from "../libs/fs.helper.js";

export function userpostMiddleware(req, res, next) {
    try {
        const { name, surname, uniqueid, cardnum } = req.body; 
        console.log(req.body);
        const data = JSON.parse(fsRead('/src/db/users.json'));
        const findData = data.find(e => 
            (e.name === name) || 
            (e.surname === surname) || 
            (e.cardnum === cardnum) || 
            (e.uniqueid === uniqueid)
        );
        
        if (findData && req.url == '/addpost') {
            const errorMsgs = [];
            if (findData.name === name) {
                errorMsgs.push('Name ');
            }
            if (findData.surname === surname) {
                errorMsgs.push('Surname ');
            }
            if (findData.cardnum === cardnum) {
                errorMsgs.push('Card number');
            }
            if (findData.uniqueid === uniqueid) {
                errorMsgs.push('Unique ID ');
            }
            
            res.status(400).json({
                status: 400,
                msg: 'User already exists',
                errors: errorMsgs + 'allaqachon band qilingan'
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
    }
}
