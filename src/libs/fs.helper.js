import fs from 'fs';
import { join } from 'path';
const fsRead = (road) => {
    return fs.readFileSync(join(process.cwd(),road));
}

const fsWrite = (road,data) => {
    fs.writeFileSync(join(process.cwd(),road),JSON.stringify(data,null,4));
    return true
}

export {fsRead,fsWrite};