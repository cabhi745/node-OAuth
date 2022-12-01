import path from 'path'
import { Request, Response } from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export function indexController (req: Request, res: Response): void  {
    res.sendFile(path.join(__dirname, '..', 'ui', 'index.html'))
}  

