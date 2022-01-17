
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));



export const linkRelative='test/data/data1.md'
export const linkAbsolute=path.normalize(`${__dirname}/data/data1.md`)
console.log(linkRelative,path.normalize(linkAbsolute) )
console.log(__dirname)
