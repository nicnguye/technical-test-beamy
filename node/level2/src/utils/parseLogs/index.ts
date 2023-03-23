import { ILog } from '../../interface';

const hydrator = (log: string) => {
    const logKeyValue = log.split('=');
        
    const logKey = logKeyValue[0].replace('sample#', '');
    const logValue = logKeyValue[1];

    return { [logKey]: logValue };
}

export const parseLogs = (logs: string[]): ILog => (
    logs.reduce((acc, l: string) => {
    const log = hydrator(l);

    return { ...acc, ...log};
}, {} as ILog));

export default { parseLogs };