import { fsWrite,fsRead } from "../libs/fs.helper.js"
const editUser = (req,res) => {
    try {
        const userId = req.params.id;
        const {name,surname,uniqueid,cardnum} = req.body;
        const userData = JSON.parse(fsRead('/src/db/users.json'));
        const userfind = userData.find(e => e.id == String(userId));
        userfind.name = name;
        userfind.surname = surname;
        userfind.uniqueid = uniqueid;
        userfind.cardnum = cardnum;
        fsWrite('/src/db/users.json',userData);
        res.status(201).json({
            status:201,
            data: userfind,
            msg:'puted user'
        });
    } catch (error) {
        res.status(400).json({
            status:400,
            msg:error
        })
    }
}
const editpost = (req,res) => {
    try {
        const userId = req.params.id;
        const userData = JSON.parse(fsRead('/src/db/users.json'));
        const userfind = userData.find(e => e.id == String(userId));
        res.status(201).json({
            status:201,
            data: userfind,
            msg:'user found'
        });
    } catch (error) {
        res.send(error)
    }
}
export {editUser,editpost}