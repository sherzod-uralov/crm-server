import { fsRead, fsWrite } from "../libs/fs.helper.js";

export function editMiddleware(req, res, next) {
    try {
        const { name, surname, uniqueid, cardnum } = req.body; 
        const data = JSON.parse(fsRead('/src/db/users.json'));
        console.log(data);
        const findData = data.find(e => e.uniqueid == uniqueid);
        console.log(findData);
        if(findData){
            res.status(400).json({
                status: 400,
                msg: 'unique id error',
                errors: uniqueid + 'allaqachon band qilingan'
            });  
        }
        next()
    } catch (error) {
        console.log(error);
    }
}

