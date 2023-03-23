import { Request, Response, NextFunction } from 'express';
import { compute } from "../../lib/slowComputation.js";
import { ILogBody, ILog } from '../interface';
import { parseLogs } from '../utils';
import redisClient from '../redis';

export const sendLogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body }: { body: ILogBody } = req;
    
        const result: ILog = parseLogs(body.log);
        const logComputed = await compute(result);

        const logString = JSON.stringify(logComputed);

        const listLength = await redisClient.rpush('LIST', logString);

        res.status(200).send(`${listLength}`);
    } catch (error) {
        console.log(error);
    }
}

export const getLogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const list = await redisClient.lrange('LIST', 0, -1);

        res.status(200).send(list);
    } catch (error) {
        console.log(error);
    }
}

export default { sendLogs, getLogs }