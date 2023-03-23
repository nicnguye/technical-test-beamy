import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { logController } from './controller';

const startApp = () => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());

    app.post('/', logController);

    app.listen(3000, () => { console.log('App listening on port 3000') });
}

startApp();

export default startApp;