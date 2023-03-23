import { parseLogs } from '../../../src/utils/parseLogs';

describe('parseLogs()', () => {
    test('should return the right format', () => {
        const fixtures = [
            'id=toto',
            'service_name=toto',
            'process=toto',
            'sample#load_avg_1m=toto',
            'sample#load_avg_5m=toto',
            'sample#load_avg_15m=toto',
        ]

        const expectedFixtures = {
            id: 'toto',
            service_name: 'toto',
            process: 'toto',
            load_avg_1m: 'toto',
            load_avg_5m: 'toto',
            load_avg_15m: 'toto'
        }

        const result = parseLogs(fixtures);

        expect(result).toEqual(expectedFixtures);
    })
})