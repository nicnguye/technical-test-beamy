import * as fs from 'fs';
import { ILog } from '../../interface';

const PARSED_DIRECTORY = `${process.cwd()}/parsed`;

export const writeFile = async (dataLogs: ILog) => {
    if (!fs.existsSync(PARSED_DIRECTORY)) {
        fs.mkdirSync(PARSED_DIRECTORY, { recursive: true });
    }

    await fs.promises.writeFile(`${PARSED_DIRECTORY}/${dataLogs.id}.json`, JSON.stringify(dataLogs));
    return dataLogs;
};

export default { writeFile };
