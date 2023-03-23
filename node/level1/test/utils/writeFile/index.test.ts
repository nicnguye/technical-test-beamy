import { writeFile } from '../../../src/utils/writeFile';
import * as fs from 'fs';

jest.mock('fs', () => ({
    existsSync: jest.fn(),
    mkdirSync: jest.fn(),
    promises: {
        writeFile: jest.fn(),
    }
}));

describe('writeFile()', () => {
    test('it should call fs writeFile with the right params', async () => {
        const fixtures = {
            id: 'toto',
            service_name: 'toto',
            process: 'toto',
            load_avg_1m: 'toto',
            load_avg_5m: 'toto',
            load_avg_15m: 'toto',
        };

        const result = await writeFile(fixtures);

        expect(result).toBe(fixtures);
        expect(fs.promises.writeFile).toHaveBeenCalledTimes(1);
    })
})