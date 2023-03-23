import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import { sendLogs, getLogs } from './controller';

const startApp = async () => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());

    app.post('/', sendLogs);
    app.get('/', getLogs);

    app.listen(3000, () => { console.log('App listening on port 3000') });
}

startApp();

export default startApp;