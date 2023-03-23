import { Request, Response, NextFunction } from 'express';
import { ILogBody, ILog } from '../interface';
import { parseLogs, writeFile } from '../utils';


export const logController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body }: { body: ILogBody } = req;
    
        const result: ILog = parseLogs(body.log);

        await writeFile(result);
    
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export default { logController }